CREATE TABLE business_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  primary_involvement TEXT NOT NULL,
  years_operating TEXT NOT NULL,
  locations TEXT NOT NULL,
  team_size TEXT NOT NULL,
  multiple_businesses BOOLEAN NOT NULL,
  multiple_businesses_details TEXT,
  primary_business_to_scale TEXT NOT NULL,
  revenue_range TEXT NOT NULL,
  business_stage TEXT NOT NULL,
  areas_to_improve TEXT[] NOT NULL,
  growth_blockers TEXT NOT NULL,
  expected_outcome TEXT NOT NULL,
  open_to_involvement BOOLEAN NOT NULL,
  expected_support TEXT NOT NULL,
  investment_range TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE business_assessments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Allow public insert" ON business_assessments FOR INSERT WITH CHECK (true);

-- Allow public to select (since admin page uses basic password protection without Supabase auth)
CREATE POLICY "Allow public select" ON business_assessments FOR SELECT USING (true);
