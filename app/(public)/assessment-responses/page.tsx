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
  ChevronDown,
  Loader2,
  Lock,
  Mail,
  Search,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Response {
  id: string;
  created_at: string;
  full_name: string | null;
  email: string | null;
  q1_money_usage: string;
  q2_success_meaning: string;
  q3_journey_changes: string;
}

export default function ResponsesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [password, setPassword] = useState("");
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const adminPassword =
    process.env.NEXT_PUBLIC_ADMIN_JOURNEY_PASSWORD || "1in1m-admin"; // Fallback for dev

  const fetchResponses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("admission_assessments")
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
      r.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.q1_money_usage.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.q2_success_meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.q3_journey_changes.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
                  Please enter the password to view assessment responses.
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
                Assessment Responses
              </h1>
              <p className="text-muted-foreground">
                Reviewing submissions from potential 1in1M participants.
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
          <div className="relative w-full md:w-80">
            <InputGroup>
              <InputGroupInput
                type="text"
                placeholder="Search responses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
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
                No responses found matching your search.
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
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <User className="size-4 text-[#FE6168]" />
                              <CardTitle className="text-xl text-white">
                                {res.full_name || "Anonymous"}
                              </CardTitle>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                              <Mail className="size-3.5" />
                              <span>{res.email || "No email provided"}</span>
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
                              <div className="space-y-3">
                                <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                  ₹100 Cr Usage
                                </h4>
                                <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                  {res.q1_money_usage}
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                  Meaning of Success
                                </h4>
                                <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                  {res.q2_success_meaning}
                                </p>
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                  Journey Impact
                                </h4>
                                <p className="bg-muted text-muted-foreground rounded-lg border p-4 leading-relaxed whitespace-pre-wrap">
                                  {res.q3_journey_changes}
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
