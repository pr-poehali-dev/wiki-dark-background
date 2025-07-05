import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userRole, setUserRole] = useState("admin"); // admin, editor, reader

  const categories = [
    { id: "docs", name: "Документация", icon: "FileText", count: 24 },
    { id: "faq", name: "FAQ", icon: "HelpCircle", count: 12 },
    { id: "articles", name: "Статьи", icon: "BookOpen", count: 38 },
    { id: "guides", name: "Руководства", icon: "Map", count: 15 },
    { id: "api", name: "API", icon: "Code", count: 8 },
    { id: "changelog", name: "Изменения", icon: "GitBranch", count: 32 },
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Начало работы с API",
      category: "API",
      author: "Алексей П.",
      updated: "2 часа назад",
      status: "published",
    },
    {
      id: 2,
      title: "Настройка аутентификации",
      category: "Документация",
      author: "Мария С.",
      updated: "5 часов назад",
      status: "draft",
    },
    {
      id: 3,
      title: "Частые вопросы по интеграции",
      category: "FAQ",
      author: "Дмитрий К.",
      updated: "1 день назад",
      status: "published",
    },
    {
      id: 4,
      title: "Миграция на новую версию",
      category: "Руководства",
      author: "Анна Р.",
      updated: "2 дня назад",
      status: "review",
    },
  ];

  const teamMembers = [
    {
      name: "Алексей П.",
      role: "Администратор",
      avatar: "/api/placeholder/32/32",
      online: true,
    },
    {
      name: "Мария С.",
      role: "Редактор",
      avatar: "/api/placeholder/32/32",
      online: false,
    },
    {
      name: "Дмитрий К.",
      role: "Автор",
      avatar: "/api/placeholder/32/32",
      online: true,
    },
    {
      name: "Анна Р.",
      role: "Редактор",
      avatar: "/api/placeholder/32/32",
      online: false,
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500";
      case "editor":
        return "bg-blue-500";
      case "author":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "review":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={28} className="text-primary" />
                <h1 className="text-2xl font-bold">DevWiki</h1>
              </div>
              <Badge variant="secondary" className="ml-4">
                Beta
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск по базе знаний..."
                  className="pl-10 w-96"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Button size="sm" variant="outline">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>

              <Avatar>
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>АП</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FolderOpen" size={20} className="mr-2" />
                    Категории
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "ghost"
                      }
                      className="w-full justify-between"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className="flex items-center">
                        <Icon name={category.icon} size={16} className="mr-2" />
                        {category.name}
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Team */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" size={20} className="mr-2" />
                    Команда
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                            member.online ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {member.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Welcome Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    Добро пожаловать в DevWiki! 🚀
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Ваша центральная база знаний для разработки и документации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="h-24 flex flex-col items-center justify-center space-y-2">
                          <Icon name="Plus" size={24} />
                          <span>Создать статью</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Создать новую статью</DialogTitle>
                          <DialogDescription>
                            Начните писать новую статью для базы знаний
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Input placeholder="Заголовок статьи" />
                          <Button className="w-full">
                            <Icon name="FileText" size={16} className="mr-2" />
                            Создать
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      className="h-24 flex flex-col items-center justify-center space-y-2"
                    >
                      <Icon name="Upload" size={24} />
                      <span>Импорт</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-24 flex flex-col items-center justify-center space-y-2"
                    >
                      <Icon name="Settings" size={24} />
                      <span>Настройки</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Всего статей
                        </p>
                        <p className="text-2xl font-bold">129</p>
                      </div>
                      <Icon
                        name="FileText"
                        size={24}
                        className="text-primary"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Активных авторов
                        </p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                      <Icon name="Users" size={24} className="text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Просмотров
                        </p>
                        <p className="text-2xl font-bold">2.4k</p>
                      </div>
                      <Icon name="Eye" size={24} className="text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Обновлений
                        </p>
                        <p className="text-2xl font-bold">47</p>
                      </div>
                      <Icon
                        name="Activity"
                        size={24}
                        className="text-orange-500"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    Последние обновления
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentArticles.map((article) => (
                      <div
                        key={article.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <h3 className="font-semibold">{article.title}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{article.category}</span>
                              <span>•</span>
                              <span>{article.author}</span>
                              <span>•</span>
                              <span>{article.updated}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(article.status)}>
                            {article.status === "published"
                              ? "Опубликовано"
                              : article.status === "draft"
                                ? "Черновик"
                                : "На проверке"}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Icon name="Edit" size={14} className="mr-1" />
                            Изменить
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Access Control */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Управление доступом
                  </CardTitle>
                  <CardDescription>
                    Настройте права доступа для различных разделов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="roles" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="roles">Роли</TabsTrigger>
                      <TabsTrigger value="permissions">Разрешения</TabsTrigger>
                      <TabsTrigger value="notifications">
                        Уведомления
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="roles" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <h4 className="font-semibold">Администратор</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Полный доступ ко всем функциям
                            </p>
                            <div className="mt-2">
                              <Progress value={100} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">
                                3 пользователя
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <h4 className="font-semibold">Редактор</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Создание и редактирование контента
                            </p>
                            <div className="mt-2">
                              <Progress value={75} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">
                                8 пользователей
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <h4 className="font-semibold">Читатель</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Только просмотр контента
                            </p>
                            <div className="mt-2">
                              <Progress value={25} className="h-2" />
                              <p className="text-xs text-muted-foreground mt-1">
                                24 пользователя
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="permissions" className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Создание статей</h4>
                            <p className="text-sm text-muted-foreground">
                              Кто может создавать новые статьи
                            </p>
                          </div>
                          <Badge>Редакторы+</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Удаление контента</h4>
                            <p className="text-sm text-muted-foreground">
                              Кто может удалять статьи
                            </p>
                          </div>
                          <Badge>Только админы</Badge>
                        </div>

                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">
                              Управление пользователями
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Кто может приглашать новых пользователей
                            </p>
                          </div>
                          <Badge>Только админы</Badge>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="notifications" className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Новые комментарии</h4>
                            <p className="text-sm text-muted-foreground">
                              Уведомления о новых комментариях
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="Mail" size={14} className="mr-1" />
                            Настроить
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <h4 className="font-semibold">
                              Изменения в статьях
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Уведомления об обновлениях
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Icon name="Bell" size={14} className="mr-1" />
                            Настроить
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
