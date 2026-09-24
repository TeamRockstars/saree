/*
# Create contact_submissions table

This table stores contact form submissions from the Gajendra Silks website.
Every message sent via the "Get in Touch" form is saved here so no inquiry is lost,
even if email delivery fails.

1. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key)
     - `name` (text, not null) — sender's full name
     - `email` (text, not null) — sender's email address
     - `phone` (text, nullable) — optional phone number
     - `subject` (text, nullable) — optional subject line
     - `message` (text, not null) — the message body
     - `created_at` (timestamptz) — when the submission was received

2. Security
   - RLS enabled.
   - Anonymous users can INSERT (submit the form without logging in).
   - No SELECT / UPDATE / DELETE from public — only service role can read submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  email      text NOT NULL,
  phone      text,
  subject    text,
  message    text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
