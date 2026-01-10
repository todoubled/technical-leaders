import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Search,
  Sparkles,
  Mail,
  FileText,
  BarChart,
  Code,
  Zap,
  Star,
  Package,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/posthog";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  version: string;
  author: string;
  category: string;
  tags: string[];
  filename: string;
  icon: string;
  featured?: boolean;
  downloads?: number;
  createdAt: string;
  updatedAt: string;
}

interface LibraryData {
  version: string;
  lastUpdated: string;
  categories: Category[];
  skills: Skill[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  "file-text": FileText,
  "bar-chart": BarChart,
  code: Code,
  zap: Zap,
};

const SkillLibrary = () => {
  const [libraryData, setLibraryData] = useState<LibraryData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/skills/library.json")
      .then((res) => res.json())
      .then((data: LibraryData) => {
        setLibraryData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load skill library:", err);
        setIsLoading(false);
      });
  }, []);

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName] || Package;
  };

  const filteredSkills = libraryData?.skills.filter((skill) => {
    const matchesSearch =
      searchQuery === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || skill.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredSkills = filteredSkills?.filter((skill) => skill.featured);
  const regularSkills = filteredSkills?.filter((skill) => !skill.featured);

  const handleDownload = (skill: Skill) => {
    trackEvent("Skill Downloaded", {
      skillId: skill.id,
      skillName: skill.name,
      category: skill.category,
    });
    window.open(`/skills/${skill.filename}`, "_blank");
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = libraryData?.categories.find((c) => c.id === categoryId);
    if (category) {
      return getIconComponent(category.icon);
    }
    return Package;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Skill Library | Agent Skills for Claude | Technical Leaders"
        description="Browse and download ready-to-use Agent Skills for Claude. Extend Claude's capabilities with modular skills for email, documents, data analysis, and more."
        keywords={[
          "Claude skills",
          "AI agent skills",
          "Claude Code",
          "AI automation",
          "skill library",
          "Claude extensions",
        ]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Agent Skill Store
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Skill Library
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse and download ready-to-use Agent Skills. Extend Claude's
            capabilities with modular skills for any workflow.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="flex-shrink-0"
              >
                All
              </Button>
              {libraryData?.categories.map((category) => {
                const IconComponent = getIconComponent(category.icon);
                return (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex-shrink-0"
                  >
                    <IconComponent className="h-4 w-4 mr-1" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : filteredSkills?.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No skills found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <>
              {/* Featured Skills */}
              {featuredSkills && featuredSkills.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <h2 className="text-2xl font-bold">Featured Skills</h2>
                  </div>
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                    }
                  >
                    {featuredSkills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        viewMode={viewMode}
                        onDownload={handleDownload}
                        getCategoryIcon={getCategoryIcon}
                        categories={libraryData?.categories || []}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Skills */}
              {regularSkills && regularSkills.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Package className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold">All Skills</h2>
                    <Badge variant="secondary" className="ml-2">
                      {regularSkills.length}
                    </Badge>
                  </div>
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                    }
                  >
                    {regularSkills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        viewMode={viewMode}
                        onDownload={handleDownload}
                        getCategoryIcon={getCategoryIcon}
                        categories={libraryData?.categories || []}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* How to Install Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">How to Install Skills</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get up and running in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Download</h3>
              <p className="text-sm text-muted-foreground">
                Click the download button on any skill to get the .zip file
              </p>
            </Card>

            <Card className="p-6 text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Extract</h3>
              <p className="text-sm text-muted-foreground">
                Unzip the skill folder to your Claude Code skills directory
              </p>
            </Card>

            <Card className="p-6 text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Use</h3>
              <p className="text-sm text-muted-foreground">
                Claude will automatically detect and use the skill when relevant
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Skill Card Component
interface SkillCardProps {
  skill: Skill;
  viewMode: "grid" | "list";
  onDownload: (skill: Skill) => void;
  getCategoryIcon: (categoryId: string) => React.ComponentType<{ className?: string }>;
  categories: Category[];
}

const SkillCard = ({
  skill,
  viewMode,
  onDownload,
  getCategoryIcon,
  categories,
}: SkillCardProps) => {
  const IconComponent = iconMap[skill.icon] || Package;
  const category = categories.find((c) => c.id === skill.category);

  if (viewMode === "list") {
    return (
      <Card className="p-4 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold truncate">{skill.name}</h3>
              {skill.featured && (
                <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
              )}
              <Badge variant="outline" className="text-xs flex-shrink-0">
                v{skill.version}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {skill.shortDescription}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {category && (
              <Badge variant="secondary" className="hidden sm:flex">
                {category.name}
              </Badge>
            )}
            <Button size="sm" onClick={() => onDownload(skill)}>
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <IconComponent className="h-8 w-8 text-primary" />
        </div>
        {skill.featured && <Star className="h-5 w-5 text-yellow-500" />}
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold">{skill.name}</h3>
        <Badge variant="outline" className="text-xs">
          v{skill.version}
        </Badge>
      </div>

      <p className="text-muted-foreground mb-4 flex-1">{skill.description}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {skill.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="text-sm text-muted-foreground">
          {category && <span>{category.name}</span>}
        </div>
        <Button
          size="sm"
          onClick={() => onDownload(skill)}
          className="group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Download className="h-4 w-4 mr-1" />
          Download
        </Button>
      </div>
    </Card>
  );
};

export default SkillLibrary;
