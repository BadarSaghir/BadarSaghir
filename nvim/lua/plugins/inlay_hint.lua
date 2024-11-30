return {
  {
    "Decodetalkers/csharpls-extended-lsp.nvim",

    event = "LspAttach",
    dependencies = { "neovim/nvim-lspconfig" },

    config = function()
      require("lspconfig").csharp_ls.setup({
        handlers = {
          ["textDocument/definition"] = require("csharpls_extended").handler,
          ["textDocument/typeDefinition"] = require("csharpls_extended").handler,
        },
        settings = {

          RoslynExtensionsOptions = {
            InlayHintsOptions = {
              EnableForParameters = true,
              ForLiteralParameters = true,
              ForIndexerParameters = true,
              ForObjectCreationParameters = true,
              ForOtherParameters = true,
              SuppressForParametersThatDifferOnlyBySuffix = false,
              SuppressForParametersThatMatchMethodIntent = false,
              SuppressForParametersThatMatchArgumentName = false,
              EnableForTypes = true,
              ForImplicitVariableTypes = true,
              ForLambdaParameterTypes = true,
              ForImplicitObjectCreatio = true,
            },
          },
        },
      })
    end,
  },
  {
    "MysticalDevil/inlay-hints.nvim",
    event = "LspAttach",
    dependencies = { "neovim/nvim-lspconfig" },
    config = function()
      require("inlay-hints").setup({
        commands = { enable = true }, -- Enable InlayHints commands, include `InlayHintsToggle`, `InlayHintsEnable` and `InlayHintsDisable`
        autocmd = { enable = true },
      })
      require("lspconfig").lua_ls.setup({
        settings = {
          Lua = {

            hint = {
              enable = true, -- necessary
            },
          },
        },
      })
      require("lspconfig").clangd.setup({
        settings = {
          clangd = {
            InlayHints = {
              Designators = true,
              Enabled = true,
              ParameterNames = true,
              DeducedTypes = true,
            },
            fallbackFlags = { "-std=c++20" },
          },
        },
      })
      -- require("lspconfig").denols.setup({
      --   settings = {
      --     deno = {
      --       inlayHints = {
      --         parameterNames = { enabled = "all", suppressWhenArgumentMatchesName = true },
      --         parameterTypes = { enabled = true },
      --         variableTypes = { enabled = true, suppressWhenTypeMatchesName = true },
      --         propertyDeclarationTypes = { enabled = true },
      --         functionLikeReturnTypes = { enable = true },
      --         enumMemberValues = { enabled = true },
      --       },
      --     },
      --   },
      -- })
      require("lspconfig").gopls.setup({
        settings = {
          gopls = {
            hints = {
              rangeVariableTypes = true,
              parameterNames = true,
              constantValues = true,
              assignVariableTypes = true,
              compositeLiteralFields = true,
              compositeLiteralTypes = true,
              functionTypeParameters = true,
            },
          },
        },
      })
      require("lspconfig").rust_analyzer.setup({
        settings = {
          ["rust-analyzer"] = {

            inlayHints = {
              bindingModeHints = {
                enable = false,
              },
              chainingHints = {
                enable = true,
              },
              closingBraceHints = {
                enable = true,
                minLines = 25,
              },
              closureReturnTypeHints = {
                enable = "never",
              },
              lifetimeElisionHints = {
                enable = "never",
                useParameterNames = false,
              },
              maxLength = 25,
              parameterHints = {
                enable = true,
              },
              reborrowHints = {
                enable = "never",
              },
              renderColons = true,
              typeHints = {
                enable = true,
                hideClosureInitialization = false,
                hideNamedConstructor = false,
              },
            },
          },
        },
      })

      --     tsserver_file_preferences = {
      --       includeInlayParameterNameHints = "all",
      --       includeInlayParameterNameHintsWhenArgumentMatchesName = false,
      --       includeInlayFunctionParameterTypeHints = true,
      --       includeInlayVariableTypeHints = true,
      --       includeInlayVariableTypeHintsWhenTypeMatchesName = false,
      --       includeInlayPropertyDeclarationTypeHints = true,
      --       includeInlayFunctionLikeReturnTypeHints = true,
      --       includeInlayEnumMemberValueHints = true,
      --     },
      --   },
      -- })
      require("lspconfig").tsserver.setup({
        settings = {
          typescript = {
            inlayHints = {
              includeInlayParameterNameHints = "all",
              includeInlayParameterNameHintsWhenArgumentMatchesName = true,
              includeInlayFunctionParameterTypeHints = true,
              includeInlayVariableTypeHints = true,
              includeInlayVariableTypeHintsWhenTypeMatchesName = true,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayFunctionLikeReturnTypeHints = true,
              includeInlayEnumMemberValueHints = true,
            },
          },
          javascript = {
            inlayHints = {
              includeInlayParameterNameHints = "all",
              includeInlayParameterNameHintsWhenArgumentMatchesName = true,
              includeInlayFunctionParameterTypeHints = true,
              includeInlayVariableTypeHints = true,
              includeInlayVariableTypeHintsWhenTypeMatchesName = true,
              includeInlayPropertyDeclarationTypeHints = true,
              includeInlayFunctionLikeReturnTypeHints = true,
              includeInlayEnumMemberValueHints = true,
            },
          },
        },
      })
      require("lspconfig").svelte.setup({
        settings = {
          typescript = {
            inlayHints = {
              parameterNames = { enabled = "all" },
              parameterTypes = { enabled = true },
              variableTypes = { enabled = true },
              propertyDeclarationTypes = { enabled = true },
              functionLikeReturnTypes = { enabled = true },
              enumMemberValues = { enabled = true },
            },
          },
        },
      })
      require("lspconfig").kotlin_language_server.setup({
        settings = {
          kotlin = {
            hints = {
              typeHints = true,
              parameterHints = true,
              chaineHints = true,
            },
          },
        },
      })
      require("lspconfig").omnisharp.setup({
        settings = {

          RoslynExtensionsOptions = {

            InlayHintsOptions = {
              EnableForParameters = true,
              ForLiteralParameters = true,
              ForIndexerParameters = true,
              ForObjectCreationParameters = true,
              ForOtherParameters = true,
              SuppressForParametersThatDifferOnlyBySuffix = false,
              SuppressForParametersThatMatchMethodIntent = false,
              SuppressForParametersThatMatchArgumentName = false,
              EnableForTypes = true,
              ForImplicitVariableTypes = true,
              ForLambdaParameterTypes = true,
              ForImplicitObjectCreatio = true,
            },
          },
        },
      })
    end,
  },
}
