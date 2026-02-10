CREATE TABLE admission_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  q1_money_usage TEXT NOT NULL,
  q2_success_meaning TEXT NOT NULL,
  q3_journey_changes TEXT NOT NULL,
  full_name TEXT,
  email TEXT
);

-- Enable RLS
ALTER TABLE admission_assessments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Allow public insert" ON admission_assessments FOR INSERT WITH CHECK (true);

-- Allow authenticated to select
CREATE POLICY "Allow authenticated select" ON admission_assessments FOR SELECT TO authenticated USING (true);
