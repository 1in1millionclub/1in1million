export const dynamic = 'force-static';

export async function GET() {
  const content = `# 1in1Million — Value-Driven School of Business

> World's first value-driven business school. Learn from Forbes-listed builders, Fortune 500 consultants, and top academicians — in Malayalam.

1in1Million (1in1M) is an exclusive, membership-based school of business in India that brings together elite entrepreneurs, business leaders, and growth-focused professionals. The platform offers flagship entrepreneurship programs, peer networks, and structured learning paths designed to foster sustainable, values-based business thinking.

## Pages

- [Home](https://oneinonemillion.com/): Overview of the 1in1Million program, hero section, curriculum highlights, and application CTA.
- [About Us](https://oneinonemillion.com/about-us): Mission, vision, and the story behind 1in1Million.
- [Assessment](https://oneinonemillion.com/assessment): Admission assessment for prospective members to evaluate fit and eligibility.

## Programs

- **3-Month Flagship Entrepreneurship Program**: An intensive cohort-based program covering business fundamentals, growth strategy, leadership, and real-world execution — taught by CEOs, Fortune 500 consultants, and Forbes-listed builders.
- Conducted entirely in **Malayalam**, making elite business education accessible to the Kerala entrepreneurial community.
- Curriculum includes sessions on market strategy, financial acumen, operations, people management, and ethical leadership.

## Membership

- Membership is application-based and selective.
- Members gain access to peer networks, expert sessions, exclusive events, and a growing alumni community.
- Membership plans are available via the website; payment is processed securely online.

## Key Facts

- **Language**: Malayalam
- **Format**: Online / Hybrid cohort-based learning
- **Target Audience**: Entrepreneurs, business owners, and professionals in Kerala and the Malayalam-speaking diaspora
- **Founded**: India
- **Website**: https://oneinonemillion.com

## Contact

- Website: https://oneinonemillion.com
- For admissions and inquiries, use the application form on the website.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
