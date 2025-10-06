import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Book,
  FolderPlus,
  History,
  MessageSquare,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import ebonixLogoDark from "/dark-nav-logo.png";
import ebonixLogoLight from "/light-nav-logo.png";

interface ChatHistory {
  id: string;
  title: string;
  timestamp: Date;
}

interface AppSidebarProps {
  onNewChat: () => void;
  chatHistory: ChatHistory[];
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  currentChatId?: string;
}

export function AppSidebar({
  onNewChat,
  chatHistory,
  onSelectChat,
  onDeleteChat,
  currentChatId,
}: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const formatChatTitle = (title: string) => {
    return title.length > 30 ? title.substring(0, 30) + "..." : title;
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4 border-b">
        {!collapsed && (
          <div className="flex items-center justify-between">
            <img
              src={theme === "dark" ? ebonixLogoDark : ebonixLogoLight}
              alt="EbonixAI"
              className="h-8 w-auto"
            />
            <ThemeToggle />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {/* New Chat Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    onClick={onNewChat}
                    variant="outline"
                    className="w-full justify-start gap-2 mb-2"
                  >
                    <Plus className="h-4 w-4" />
                    {!collapsed && <span>New Chat</span>}
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 🔍 Search Chats */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      `flex items-center gap-2 p-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent/50"
                      }`
                    }
                  >
                    <Search className="h-4 w-4" />
                    {!collapsed && <span>Search chats</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 📚 Library */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/library"
                    className={({ isActive }) =>
                      `flex items-center gap-2 p-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent/50"
                      }`
                    }
                  >
                    <Book className="h-4 w-4" />
                    {!collapsed && <span>Library</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* 📂 Projects */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `flex items-center gap-2 p-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent/50"
                      }`
                    }
                  >
                    <FolderPlus className="h-4 w-4" />
                    {!collapsed && <span>Projects</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Chat History */}
        {!collapsed && chatHistory.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Recent Chats
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {chatHistory.map((chat) => (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton
                      asChild
                      className={`group ${
                        currentChatId === chat.id
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }`}
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer w-full p-2 rounded-md hover:bg-accent/50"
                        onClick={() => onSelectChat(chat.id)}
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <MessageSquare className="h-4 w-4 shrink-0" />
                          <span className="text-sm truncate">
                            {formatChatTitle(chat.title)}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteChat(chat.id);
                          }}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* User Profile Section (Bottom) */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors">
              {/* Avatar */}
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                alt="User Avatar"
                className="h-10 w-10 rounded-full border"
              />

              {/* Info */}
              {!collapsed && (
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-sm font-medium truncate">John Doe</span>
                  <span className="text-xs text-muted-foreground">
                    Free Plan
                  </span>
                </div>
              )}

              {/* Upgrade button */}
              {!collapsed && (
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto whitespace-nowrap"
                >
                  Upgrade
                </Button>
              )}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
