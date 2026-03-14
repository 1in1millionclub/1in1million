"use client";

import FooterSection from "@/components/footer-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  CalendarDays,
  ChevronDown,
  Download,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  User
} from "lucide-react";
import { useEffect, useState } from "react";

interface Application {
  id: string;
  created_at: string;
  name: string;
  email: string;
  age: number;
  phone_number: string;
  location: string;
  expectations: string;
  plan: string;
}

export default function ApplicationsAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const adminPassword =
    process.env.NEXT_PUBLIC_ADMIN_JOURNEY_PASSWORD || "1in1m-admin";

  const fetchApplications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setApplications(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    const auth = localStorage.getItem("applications_auth");
    if (auth === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthenticated(true);
      fetchApplications();
    }
    setIsHydrated(true);
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("applications_auth", "true");
      fetchApplications();
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("applications_auth");
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.expectations.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleExportCSV = () => {
    if (filteredApplications.length === 0) return;

    // CSV Headers
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Age",
      "Location",
      "Plan",
      "Date Applied",
      "Expectations"
    ];

    // Map data to rows
    const rows = filteredApplications.map(app => [
      `"${app.name.replace(/"/g, '""')}"`,
      `"${app.email}"`,
      `"${app.phone_number}"`,
      app.age,
      `"${app.location.replace(/"/g, '""')}"`,
      `"${app.plan}"`,
      `"${format(new Date(app.created_at), "yyyy-MM-dd HH:mm")}"`,
      `"${app.expectations.replace(/"/g, '""')}"`
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `applications_${format(new Date(), "yyyy-MM-dd")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#FE6168]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[80dvh] items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="text-white shadow-2xl bg-white/5 backdrop-blur-md border-none">
            <CardHeader className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#FE6168]/20 bg-[#FE6168]/10">
                <Lock className="h-6 w-6 text-[#FE6168]" />
              </div>
              <div>
                <CardTitle className="text-2xl font-monument">Admin Access</CardTitle>
                <CardDescription className="text-muted-foreground text-balance font-mont">
                  Please enter the password to view admission applications.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuth} className="space-y-4">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  className="bg-white/5 border-border text-white"
                  autoFocus
                />
                <Button
                  type="submit"
                  className="w-full bg-[#FE6168] text-white hover:bg-[#FE6168]/80 font-monument"
                >
                  Unlock Applications
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-dvh w-full border-b p-6 text-slate-200 md:p-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <h1 className="font-monument text-4xl text-white">
                Admission <span className="text-[#FE6168]">Applications</span>
              </h1>
              <p className="text-muted-foreground font-mont">
                Reviewing candidate expressions of interest for the 1in1M journey.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="w-fit border-border hover:bg-[#FE6168] hover:text-white font-monument"
            >
              Logout
            </Button>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full md:w-96">
              <InputGroup>
                <InputGroupInput
                  type="text"
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/5 border-border text-white pl-4"
                />
                <InputGroupAddon className="border-border">
                  <Search className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            
            <Button
              variant="outline"
              onClick={handleExportCSV}
              disabled={filteredApplications.length === 0}
              className="border-border hover:bg-[#FE6168]/10 hover:text-[#FE6168] font-monument gap-2"
            >
              <Download className="size-4" />
              Export CSV
            </Button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <Loader2 className="h-10 w-10 animate-spin text-[#FE6168]" />
              <p className="text-muted-foreground font-mont">Loading applications...</p>
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 py-20 text-center">
              <p className="text-red-400 font-mont">Error: {error}</p>
              <Button
                variant="link"
                onClick={fetchApplications}
                className="text-red-300 font-mont"
              >
                Try again
              </Button>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="border-border bg-white/5 rounded-2xl border border-dashed py-20 text-center backdrop-blur-sm">
              <p className="text-muted-foreground text-lg font-mont font-medium">
                No applications found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredApplications.map((app, idx) => {
                const isExpanded = expandedId === app.id;
                return (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      className={`group cursor-pointer overflow-hidden transition-all bg-white/5 backdrop-blur-sm border-border hover:border-[#FE6168]/50 ${
                        isExpanded
                          ? "ring-1 ring-[#FE6168]/30 shadow-2xl"
                          : "shadow-md"
                      }`}
                      onClick={() => setExpandedId(isExpanded ? null : app.id)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FE6168]/10 text-[#FE6168]">
                              <User className="size-6" />
                            </div>
                            <div className="space-y-0.5">
                              <CardTitle className="text-xl text-white font-monument font-normal">
                                {app.name}
                              </CardTitle>
                              <div className="text-muted-foreground flex items-center gap-3 text-sm font-mont">
                                <span className="flex items-center gap-1">
                                  <Mail className="size-3.5" />
                                  {app.email}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-border" />
                                <span className="flex items-center gap-1">
                                  <Phone className="size-3.5" />
                                  {app.phone_number}
                                </span>
                                <span className="h-1 w-1 rounded-full bg-border" />
                                <Badge variant="secondary" className="bg-[#FE6168]/10 text-[#FE6168] border-none text-[10px] font-monument px-2">
                                  {app.plan}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className="hidden sm:flex bg-white/5 border-border text-xs font-mont py-1 px-3">
                              <Calendar className="h-3.5 w-3.5 mr-2 opacity-60" />
                              {format(new Date(app.created_at), "MMM d, yyyy")}
                            </Badge>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="size-5 text-muted-foreground group-hover:text-[#FE6168]" />
                            </motion.div>
                          </div>
                        </div>
                      </CardHeader>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          >
                            <CardContent className="space-y-6 border-t border-border pt-6 pb-8 px-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-xs font-monument text-[#FE6168] opacity-70 uppercase tracking-widest">
                                    <CalendarDays className="size-3" />
                                    Age
                                  </div>
                                  <p className="text-white font-mont font-medium">{app.age} years</p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-xs font-monument text-[#FE6168] opacity-70 uppercase tracking-widest">
                                    <MapPin className="size-3" />
                                    Location
                                  </div>
                                  <p className="text-white font-mont font-medium">{app.location}</p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-xs font-monument text-[#FE6168] opacity-70 uppercase tracking-widest">
                                    <Calendar className="size-3" />
                                    Applied On
                                  </div>
                                  <p className="text-white font-mont font-medium">
                                    {format(new Date(app.created_at), "PPP p")}
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 text-xs font-monument text-[#FE6168] opacity-70 uppercase tracking-widest">
                                    <Target className="size-3" />
                                    Selected Plan
                                  </div>
                                  <p className="text-white font-mont font-medium">{app.plan}</p>
                                </div>
                              </div>

                              <div className="space-y-3 bg-white/5 rounded-2xl p-5 border border-border">
                                <div className="flex items-center gap-2 text-xs font-monument text-[#FE6168] opacity-70 uppercase tracking-widest">
                                  <Target className="size-3" />
                                  Expectations
                                </div>
                                <p className="text-slate-300 font-mont leading-relaxed whitespace-pre-wrap">
                                  {app.expectations}
                                </p>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
}
