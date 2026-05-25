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
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  Download,
  Loader2,
  Lock,
  Search,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Response {
  id: string;
  created_at: string;
  full_name: string;
  company_name: string;
  company_website: string | null;
  company_social: string | null;
  industry: string;
  primary_involvement: string;
  years_operating: string;
  locations: string;
  team_size: string;
  multiple_businesses: boolean;
  multiple_businesses_details: string | null;
  primary_business_to_scale: string;
  revenue_range: string;
  business_stage: string;
  areas_to_improve: string[];
  growth_blockers: string;
  expected_outcome: string;
  open_to_involvement: boolean;
  expected_support: string;
  investment_range: string;
}

export default function BusinessResponsesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [password, setPassword] = useState("");
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const adminPassword =
    process.env.NEXT_PUBLIC_ADMIN_JOURNEY_PASSWORD || "1in1m-admin";

  const fetchResponses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("business_assessments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setResponses(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    const auth = localStorage.getItem("assessment_auth");
    if (auth === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthenticated(true);
      fetchResponses();
    }
    setIsHydrated(true);
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("assessment_auth", "true");
      fetchResponses();
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("assessment_auth");
  };

  const filteredResponses = responses.filter(
    (r) =>
      r.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.industry?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleExportCSV = () => {
    if (filteredResponses.length === 0) return;

    const headers = [
      "Date Submitted",
      "Full Name",
      "Company Name",
      "Company Website",
      "Company Social",
      "Industry",
      "Primary Involvement",
      "Years Operating",
      "Locations",
      "Team Size",
      "Multiple Businesses",
      "Multiple Businesses Details",
      "Primary Business to Scale",
      "Revenue Range",
      "Business Stage",
      "Areas to Improve",
      "Growth Blockers",
      "Expected Outcome",
      "Open to Involvement",
      "Expected Support",
      "Investment Range",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredResponses.map((res) => {
        const row = [
          format(new Date(res.created_at), "yyyy-MM-dd"),
          res.full_name,
          res.company_name,
          res.company_website || "",
          res.company_social || "",
          res.industry,
          res.primary_involvement,
          res.years_operating,
          res.locations,
          res.team_size,
          res.multiple_businesses ? "YES" : "NO",
          res.multiple_businesses_details || "",
          res.primary_business_to_scale,
          res.revenue_range,
          res.business_stage,
          res.areas_to_improve.join("; "),
          res.growth_blockers,
          res.expected_outcome,
          res.open_to_involvement ? "YES" : "NO",
          res.expected_support,
          res.investment_range,
        ];
        return row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",");
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `business_assessments_${format(new Date(), "yyyy-MM-dd")}.csv`,
    );
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
          <Card className="text-white shadow-2xl">
            <CardHeader className="space-y-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#FE6168]/20 bg-[#FE6168]/10">
                <Lock className="h-6 w-6 text-[#FE6168]" />
              </div>
              <div>
                <CardTitle className="text-2xl">Admin Access</CardTitle>
                <CardDescription className="text-muted-foreground text-balance">
                  Please enter the password to view business assessments.
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
                  autoFocus
                />
                <Button
                  type="submit"
                  className="w-full bg-[#FE6168] text-white hover:bg-[#FE6168]/80"
                >
                  Unlock Responses
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
        <div className="space-y-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-monument text-4xl text-white">
                Business Assessments
              </h1>
              <p className="text-muted-foreground">
                Reviewing strategic assessments from business leaders.
              </p>

              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="w-fit"
              >
                Logout
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <InputGroup>
              <InputGroupInput
                type="text"
                placeholder="Search by name, company, industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <Button
              variant="outline"
              onClick={handleExportCSV}
              disabled={filteredResponses.length === 0}
              className="w-fit"
            >
              CSV
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <Loader2 className="h-10 w-10 animate-spin text-[#FE6168]" />
              <p className="text-muted-foreground">Loading assessments...</p>
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 py-20 text-center">
              <p className="text-red-400">Error: {error}</p>
              <Button
                variant="link"
                onClick={fetchResponses}
                className="text-red-300"
              >
                Try again
              </Button>
            </div>
          ) : filteredResponses.length === 0 ? (
            <div className="border-border bg-muted rounded-xl border border-dashed py-20 text-center">
              <p className="text-muted-foreground text-lg">
                No business assessments found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredResponses.map((res, idx) => {
                const isExpanded = expandedId === res.id;
                return (
                  <motion.div
                    key={res.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card
                      className={`group cursor-pointer overflow-hidden transition-all hover:border-[#FE6168]/50 ${
                        isExpanded
                          ? "border-[#FE6168]/30 shadow-xl"
                          : "shadow-md"
                      }`}
                      onClick={() => setExpandedId(isExpanded ? null : res.id)}
                    >
                      <div className="h-1 w-full bg-linear-to-r from-[#FE6168] to-[#FE6168]/20 opacity-50 transition-opacity group-hover:opacity-100" />
                      <CardHeader className="">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Building className="size-5 text-[#FE6168]" />
                              <CardTitle className="text-xl text-white">
                                {res.company_name}
                              </CardTitle>
                              <Badge variant="secondary" className="ml-2">
                                {res.industry}
                              </Badge>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1.5">
                                <User className="size-4" />
                                <span>{res.full_name}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Briefcase className="size-4" />
                                <span>{res.primary_involvement}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className="hidden sm:flex">
                              <Calendar className="h-3.5 w-3.5" />
                              <span className="mt-0.5 ml-1.5">
                                {format(new Date(res.created_at), "PPP")}
                              </span>
                            </Badge>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="size-5 text-slate-500 transition-colors group-hover:text-[#FE6168]" />
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
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <CardContent className="space-y-8 border-t pt-6">
                              {/* Quick Stats Grid */}
                              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="space-y-1">
                                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                    Revenue
                                  </p>
                                  <p className="font-medium">
                                    {res.revenue_range}
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                    Team Size
                                  </p>
                                  <p className="font-medium">{res.team_size}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                    Years Active
                                  </p>
                                  <p className="font-medium">
                                    {res.years_operating}
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                    Stage
                                  </p>
                                  <p className="font-medium">
                                    {res.business_stage}
                                  </p>
                                </div>
                              </div>

                              {(res.company_website || res.company_social) && (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                  {res.company_website && (
                                    <div className="space-y-1">
                                      <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                        Website
                                      </p>
                                      <p className="font-medium break-all">
                                        <a href={res.company_website.startsWith('http') ? res.company_website : `https://${res.company_website}`} target="_blank" rel="noreferrer" className="text-[#FE6168] hover:underline">
                                          {res.company_website}
                                        </a>
                                      </p>
                                    </div>
                                  )}
                                  {res.company_social && (
                                    <div className="space-y-1">
                                      <p className="text-muted-foreground text-xs tracking-wider uppercase">
                                        Social / LinkedIn
                                      </p>
                                      <p className="font-medium break-all">
                                        {res.company_social}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}

                              <div className="space-y-3">
                                <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                  Areas to Improve
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {res.areas_to_improve.map((area) => (
                                    <Badge key={area} variant="secondary">
                                      {area}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-3">
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Primary Business to Scale & Expectations
                                  </h4>
                                  <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                    {res.primary_business_to_scale}
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Growth Blockers
                                  </h4>
                                  <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                    {res.growth_blockers}
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-3">
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Expected Outcome (12-24 mos)
                                  </h4>
                                  <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                    {res.expected_outcome}
                                  </p>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Expected Support from 1in1M
                                  </h4>
                                  <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                    {res.expected_support}
                                  </p>
                                </div>
                              </div>

                              <div className="bg-muted/50 flex flex-col justify-between gap-4 rounded-lg border p-4 sm:flex-row sm:items-center">
                                <div>
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Investment Readiness
                                  </h4>
                                  <p className="mt-1 font-medium text-[#FE6168]">
                                    {res.investment_range}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Open to restructuring?
                                  </h4>
                                  <p className="mt-1 font-medium text-white">
                                    {res.open_to_involvement ? "YES" : "NO"}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                    Multiple Businesses?
                                  </h4>
                                  <p className="mt-1 font-medium text-white">
                                    {res.multiple_businesses ? "YES" : "NO"}
                                    {res.multiple_businesses &&
                                      res.multiple_businesses_details && (
                                        <span className="text-muted-foreground ml-2 text-sm font-normal">
                                          ({res.multiple_businesses_details})
                                        </span>
                                      )}
                                  </p>
                                </div>
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
