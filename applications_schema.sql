CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  age INTEGER NOT NULL,
  phone_number TEXT NOT NULL,
  location TEXT NOT NULL,
  expectations TEXT NOT NULL,
  plan TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Allow public insert" ON applications FOR INSERT WITH CHECK (true);

-- Allow authenticated to select
CREATE POLICY "Allow authenticated select" ON applications FOR SELECT TO authenticated USING (true);
