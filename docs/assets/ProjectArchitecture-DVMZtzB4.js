import{r as d,j as e}from"./main-CkCm9YRR.js";import{c as n,P as y,S as w,m as v,D as j}from"./index-tf_NhHMu.js";import"./Geometry-CcEZtleq.js";const N=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],S=n("code-xml",N);const C=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],k=n("eye",C);const I=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],P=n("file-code-2",I);const A=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],T=n("file-json",A);const z=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]],U=n("file-type-2",z);const E=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],g=n("file",E);const F=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],R=n("folder",F);const M=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],L=n("terminal",M),V=[{name:"src",type:"folder",children:[{name:"features",type:"folder",children:[{name:"auth",type:"folder",children:[{name:"components",type:"folder",children:[{name:"LoginForm.tsx",type:"file",preview:"login"}]},{name:"hooks",type:"folder",children:[{name:"useAuth.ts",type:"file",preview:"code"}]}]},{name:"dashboard",type:"folder",children:[{name:"components",type:"folder",children:[{name:"StatCard.tsx",type:"file",preview:"stat"}]}]}]},{name:"components",type:"folder",children:[{name:"ui",type:"folder",children:[{name:"Button.tsx",type:"file",preview:"button"}]}]},{name:"App.tsx",type:"file",preview:"code"}]},{name:"package.json",type:"file",preview:"code"}],B=[{name:"src",type:"folder",children:[{name:"Core",type:"folder",children:[{name:"Entities",type:"folder",children:[{name:"User.cs",type:"file",preview:"code"}]}]},{name:"WebAPI",type:"folder",children:[{name:"Controllers",type:"folder",children:[{name:"UsersController.cs",type:"file",preview:"code"}]}]}]}],h=({item:t,depth:i=0,onSelect:p,selectedFile:c})=>{const[s,m]=d.useState(!0),o=()=>t.type==="folder"?e.jsx(R,{size:14,className:"text-blue-400"}):t.name.endsWith(".tsx")||t.name.endsWith(".ts")?e.jsx(U,{size:14,className:"text-blue-500"}):t.name.endsWith(".cs")?e.jsx(P,{size:14,className:"text-purple-500"}):t.name.endsWith(".json")?e.jsx(T,{size:14,className:"text-yellow-500"}):e.jsx(g,{size:14,className:"text-slate-400"}),l=c===t.name;return e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:`flex items-center gap-2 py-1 px-2 hover:bg-slate-800/50 rounded cursor-pointer select-none ${l?"bg-blue-500/20 text-blue-300":""}`,style:{paddingLeft:`${i*12+8}px`},onClick:()=>{t.type==="folder"?m(!s):p(t)},children:[e.jsx("span",{className:"w-4 flex justify-center",children:t.type==="folder"&&e.jsx("span",{className:`text-slate-500 text-xs transition-transform ${s?"rotate-90":""}`,children:"▶"})}),o(),e.jsx("span",{className:`text-sm ${l?"text-blue-300":"text-slate-300"}`,children:t.name})]}),t.type==="folder"&&s&&t.children&&e.jsx(v.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:t.children.map((u,x)=>e.jsx(h,{item:u,depth:i+1,onSelect:p,selectedFile:c},x))})]})},_=()=>e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center h-full",children:[e.jsx("button",{className:"px-4 py-2 bg-slate-100 text-slate-900 rounded-md font-medium hover:bg-slate-200 transition-colors",children:"Default Button"}),e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20",children:"Primary Button"}),e.jsx("button",{className:"px-4 py-2 border border-slate-700 text-slate-300 rounded-md font-medium hover:bg-slate-800 transition-colors",children:"Outline Button"})]}),$=()=>e.jsx("div",{className:"flex flex-col items-center justify-center h-full w-full max-w-xs mx-auto",children:e.jsxs("div",{className:"w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl",children:[e.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Sign In"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-slate-400 mb-1",children:"Email"}),e.jsx("input",{type:"email",placeholder:"name@example.com",className:"w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-medium text-slate-400 mb-1",children:"Password"}),e.jsx("input",{type:"password",placeholder:"••••••••",className:"w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"})]}),e.jsx("button",{className:"w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition-colors",children:"Sign In"})]})]})}),D=()=>e.jsx("div",{className:"flex items-center justify-center h-full w-full",children:e.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl w-64",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h4",{className:"text-sm font-medium text-slate-400",children:"Total Revenue"}),e.jsx(j,{size:16,className:"text-slate-500"})]}),e.jsx("div",{className:"text-3xl font-bold text-white mb-1",children:"$45,231.89"}),e.jsxs("p",{className:"text-xs text-emerald-400 flex items-center gap-1",children:[e.jsx("span",{className:"text-emerald-500",children:"↑"})," +20.1% from last month"]})]})}),H={"LoginForm.tsx":`import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/Button';

// 1. Strict schema validation using Zod
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // 2. Secure submission handler
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setError(null);
      await login(data.email, data.password);
    } catch (err) {
      // 3. Generic error message to prevent user enumeration
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      {error && <div className="text-red-500 text-sm">{error}</div>}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
        <input 
          id="email"
          type="email" 
          autoComplete="email"
          {...register('email')} 
          className="mt-1 block w-full rounded-md bg-slate-950 border-slate-800 text-white px-3 py-2"
        />
        {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
        <input 
          id="password"
          type="password" 
          autoComplete="current-password"
          {...register('password')} 
          className="mt-1 block w-full rounded-md bg-slate-950 border-slate-800 text-white px-3 py-2"
        />
        {errors.password && <span className="text-red-400 text-xs">{errors.password.message}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
}`,"useAuth.ts":`import { create } from 'zustand';
import { api } from '../api/authApi';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Global state management using Zustand
export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  
  login: async (email, password) => {
    // SECURITY: Tokens should be handled via HttpOnly cookies by the backend
    // rather than localStorage to prevent XSS (Cross-Site Scripting) attacks.
    const response = await api.post('/auth/login', { email, password });
    
    set({ 
      user: response.data.user, 
      isAuthenticated: true 
    });
  },
  
  logout: async () => {
    // Invalidate session on the server side
    await api.post('/auth/logout');
    set({ user: null, isAuthenticated: false });
  }
}));`,"Button.tsx":`import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// 1. Class Variance Authority for scalable, type-safe variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-100",
        ghost: "hover:bg-slate-800 text-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// 2. forwardRef for proper component composition and accessibility
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,"StatCard.tsx":`import { memo } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
}

// 1. React.memo prevents unnecessary re-renders for pure presentational components
export const StatCard = memo(({ title, value, trend, icon: Icon }: StatCardProps) => {
  return (
    <div 
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl"
      role="region" 
      aria-label={\`Statistic: \${title}\`}
    >
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-medium text-slate-400">{title}</h4>
        <Icon size={16} className="text-slate-500" aria-hidden="true" />
      </div>
      
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      
      {trend && (
        <p className={\`text-xs flex items-center gap-1 \${trend.isPositive ? 'text-emerald-400' : 'text-red-400'}\`}>
          <span aria-hidden="true">{trend.isPositive ? '↑' : '↓'}</span>
          <span>{Math.abs(trend.value)}% from last month</span>
        </p>
      )}
    </div>
  );
});

StatCard.displayName = 'StatCard';`,"User.cs":`using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class User
    {
        public Guid Id { get; private set; }
        
        // 1. Data annotations for basic validation
        [Required]
        [EmailAddress]
        [MaxLength(256)]
        public string Email { get; private set; }
        
        // SECURITY: Store hashes, NEVER plain text passwords
        [Required]
        public string PasswordHash { get; private set; }
        
        public bool IsEmailVerified { get; private set; }
        public DateTime CreatedAt { get; private set; }

        // 2. Private constructor enforces creation through factory methods
        private User() { }

        public User(string email, string passwordHash)
        {
            Id = Guid.NewGuid();
            Email = email.ToLowerInvariant();
            PasswordHash = passwordHash;
            CreatedAt = DateTime.UtcNow;
            IsEmailVerified = false;
        }

        // 3. Encapsulated behavior instead of public setters (Anemic Domain Model anti-pattern)
        public void VerifyEmail()
        {
            IsEmailVerified = true;
        }
        
        public void UpdatePassword(string newPasswordHash)
        {
            PasswordHash = newPasswordHash;
        }
    }
}`,"UsersController.cs":`using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.DTOs;
using Application.Interfaces;
using System.Security.Claims;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    [Authorize] // SECURITY: Enforce authentication by default on all endpoints
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UsersController> _logger;

        // 1. Dependency Injection
        public UsersController(IUserService userService, ILogger<UsersController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> GetUser(Guid id)
        {
            // SECURITY: Ensure users can only access their own data unless they are an Admin (BOLA/IDOR prevention)
            var currentUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (currentUserId != id.ToString() && !User.IsInRole("Admin"))
            {
                _logger.LogWarning("Unauthorized access attempt by user {UserId} for target {TargetId}", currentUserId, id);
                return Forbid();
            }

            // 2. Always return DTOs, never domain entities directly to prevent over-posting and data leakage
            var userDto = await _userService.GetUserByIdAsync(id);
            return userDto != null ? Ok(userDto) : NotFound();
        }
    }
}`,"App.tsx":`import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/Toaster';

// 1. Configure React Query with sensible defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    // 2. Wrap application in necessary providers
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="app-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}`,"package.json":`{
  "name": "enterprise-react-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-slot": "^1.0.2",
    "@tanstack/react-query": "^5.17.19",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.323.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.49.3",
    "react-router-dom": "^6.21.3",
    "tailwind-merge": "^2.2.1",
    "zod": "^3.22.4",
    "zustand": "^4.5.0"
  }
}`},q=({filename:t})=>{const i=H[t]||`// Code for ${t} is not available.`;return e.jsxs("div",{className:"p-4 h-full overflow-y-auto custom-scrollbar bg-[#0d1117]",children:[e.jsxs("div",{className:"text-slate-500 mb-4 border-b border-slate-800 pb-2 flex justify-between items-center",children:[e.jsxs("span",{children:["// ",t]}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider text-emerald-500/70 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",children:"Production Ready"})]}),e.jsx("pre",{className:"font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap",children:i})]})};function Q(){const[t,i]=d.useState("react"),[p,c]=d.useState(""),[s,m]=d.useState(null),[o,l]=d.useState("preview"),u=`npm create vite@latest my-app -- --template react-ts
cd my-app
npx shadcn@latest init
npx shadcn@latest add button card input
npm run dev`,x=`dotnet new webapi -n WebAPI
dotnet new classlib -n Core
dotnet new classlib -n Application
dotnet new classlib -n Infrastructure
dotnet sln add **/*.csproj`;d.useEffect(()=>{c("");const r=t==="react"?u:x;let a=0;const f=setInterval(()=>{c(r.substring(0,a)),a++,a>r.length&&clearInterval(f)},30);return()=>clearInterval(f)},[t]);const b=r=>{m(r),r.preview==="code"&&l("code")};return e.jsxs("div",{className:"w-full flex flex-col items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-3xl font-bold text-slate-100 mb-2",children:"Architecture & UI Components"}),e.jsx("p",{className:"text-slate-400",children:"Explore project structure and interactive UI components (Shadcn UI)."})]}),e.jsxs("div",{className:"flex gap-4 mb-6",children:[e.jsxs("button",{onClick:()=>{i("react"),m(null)},className:`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${t==="react"?"bg-blue-500/20 text-blue-400 border border-blue-500/50":"bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"}`,children:[e.jsx(y,{size:18})," React + Shadcn"]}),e.jsxs("button",{onClick:()=>{i("dotnet"),m(null)},className:`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${t==="dotnet"?"bg-purple-500/20 text-purple-400 border border-purple-500/50":"bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"}`,children:[e.jsx(w,{size:18})," .NET Clean Arch"]})]}),e.jsxs("div",{className:"w-full grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-2xl lg:col-span-1",children:[e.jsx("div",{className:"bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800",children:e.jsx("div",{className:"text-xs text-slate-400 uppercase tracking-wider font-semibold",children:"Explorer"})}),e.jsx("div",{className:"p-2 h-80 overflow-y-auto custom-scrollbar",children:t==="react"?V.map((r,a)=>e.jsx(h,{item:r,onSelect:b,selectedFile:s?.name},a)):B.map((r,a)=>e.jsx(h,{item:r,onSelect:b,selectedFile:s?.name},a))})]}),e.jsx("div",{className:"bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-2xl lg:col-span-2",children:s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800",children:[e.jsxs("div",{className:"text-xs text-slate-400 flex items-center gap-2",children:[e.jsx(g,{size:14})," ",s.name]}),s.preview!=="code"&&e.jsxs("div",{className:"flex bg-slate-950 rounded-lg p-0.5 border border-slate-800",children:[e.jsxs("button",{onClick:()=>l("preview"),className:`px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${o==="preview"?"bg-slate-800 text-white":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(k,{size:12})," Preview"]}),e.jsxs("button",{onClick:()=>l("code"),className:`px-3 py-1 text-xs rounded-md flex items-center gap-1.5 transition-colors ${o==="code"?"bg-slate-800 text-white":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(S,{size:12})," Code"]})]})]}),e.jsxs("div",{className:"h-80 relative bg-slate-950/50",children:[o==="preview"&&s.preview==="button"&&e.jsx(_,{}),o==="preview"&&s.preview==="login"&&e.jsx($,{}),o==="preview"&&s.preview==="stat"&&e.jsx(D,{}),o==="code"&&e.jsx(q,{filename:s.name})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),e.jsxs("div",{className:"mx-auto text-xs text-slate-500 flex items-center gap-1",children:[e.jsx(L,{size:12})," Terminal (Select a file to preview)"]})]}),e.jsx("div",{className:"p-4 font-mono text-sm text-slate-300 h-80 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[p.split(`
`).map((r,a)=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400",children:"➜"}),e.jsx("span",{className:"text-blue-400",children:"~"}),e.jsx("span",{className:"whitespace-pre-wrap",children:r})]},a)),e.jsx(v.div,{animate:{opacity:[1,0]},transition:{repeat:1/0,duration:.8},className:"w-2 h-4 bg-slate-400 mt-1"})]})})]})})]})]})}export{Q as ProjectArchitecture};
