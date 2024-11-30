local function telescope_create_file()
  require('telescope.builtin').find_files({
    prompt_title = 'Create File',
    find_command = { 'fd', '--type', 'd', '.', vim.fn.getcwd() },
    attach_mappings = function(_, map)
      local state = require 'telescope.actions.state'
      local actions = require 'telescope.actions'
      map('i', '<CR>', function(prompt_bufnr)
        local content = state.get_selected_entry()
        actions.close(prompt_bufnr)
        -- vim.print('content : ' .. content.cwd .. '/' .. content.value)
        local dir = content.value
        local name = vim.fn.input 'File Name: '
        vim.cmd('e ' .. dir .. name)
        vim.cmd 'w ++p'
      end)
      return true
    end,
  })
end

--- lua/plugins/telescope.lua
return {
  'nvim-telescope/telescope.nvim',
  keys = {
   { '<leader>fc', telescope_create_file, desc = 'Create File' },
  }
}
