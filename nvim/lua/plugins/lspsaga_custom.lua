return {
  {
    "nvimdev/lspsaga.nvim",
    config = function()
      require("lspsaga").setup({
        lightbulb = {
          enable = false,
        },
        implement = {
          enable = true, -- Enable the implementation feature
          sign = true, -- Show sign in status column
          virtual_text = true, -- Show virtual text at the end of line
          priority = 100, -- Sign priority
        },
      })
    end,
    dependencies = {
      "nvim-treesitter/nvim-treesitter", -- optional
      "nvim-tree/nvim-web-devicons", -- optional
    },
  },
  {},
}
