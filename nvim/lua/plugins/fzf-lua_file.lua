local function fzf_create_file()
  local fzf = require 'fzf-lua'
  local path = require 'fzf-lua.path'
  local uv = vim.uv or vim.loop
  local cmd = 'fd -t d . ' .. uv.cwd()
  local function get_full_path(selected)
    if #selected < 1 then
      return
    end
    local entry = path.entry_to_file(selected[1], { cwd = uv.cwd() })
    if entry.path == '<none>' then
      return
    end
-- Taken from require('fzf-lua').files, maybe there's a better way?
    local fullpath = entry.path or entry.uri and entry.uri:match '^%a+://(.*)'
    if not path.is_absolute(fullpath) then
      fullpath = path.join({ uv.cwd(), fullpath })
    end
    return fullpath
  end
  fzf.fzf_exec(cmd, {
    defaults = {},
    prompt = 'Create file in dir> ',
    cwd = uv.cwd(),
    cwd_prompt_shorten_len = 32,
    cwd_prompt_shorten_val = 1,
    fzf_opts = {
      ['--tiebreak'] = 'end',
      ['--preview'] = {
        type = 'cmd',
        fn = function(selected)
          local fullpath = get_full_path(selected)
          return string.format('command ls -Alhv --group-directories-first %s', fullpath)
        end,
      },
    },
    fn_transform = function(x)
      return fzf.make_entry.file(x, { file_icons = true, color_icons = true, cwd = uv.cwd() })
    end,
    actions = {
      ['default'] = function(selected)
        local fullpath = get_full_path(selected)
        -- If you have dressing.nvim, you can get "pretty" input dialog box
        vim.ui.input({ prompt = 'File Name: ' }, function(name)
          if name == nil then
            return
          end
          vim.cmd('e ' .. fullpath .. name)
          vim.cmd 'w ++p' -- will create directory if not exists, so you can write new/dir/some_file.lua.
        end)
      end,
    },
  })
end

-- lua/plugins/fzf-lua.lua
return {
  'ibhagwan/fzf-lua',
  keys = {
    {'<leader>fc', fzf_create_file, desc = 'Create File'}
  },
}
