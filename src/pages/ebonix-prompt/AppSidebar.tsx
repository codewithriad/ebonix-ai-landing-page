import { useState } from "react";
import { MessageSquare, Plus, Settings, History, Trash2 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import ebonixLogoLight from "/light-nav-logo.png";
import ebonixLogoDark from "/dark-nav-logo.png";
import { useEffect } from "react";

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
  currentChatId
}: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const formatChatTitle = (title: string) => {
    return title.length > 30 ? title.substring(0, 30) + "..." : title;
  };

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
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
                      className={`group ${currentChatId === chat.id ? 'bg-accent text-accent-foreground' : ''}`}
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

        {/* Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      `flex items-center gap-2 p-2 rounded-md transition-colors ${isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent/50'
                      }`
                    }
                  >
                    <Settings className="h-4 w-4" />
                    {!collapsed && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}