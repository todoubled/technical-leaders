import SEO from '@/components/SEO';

const Benchmark = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <SEO
        title="AI Leadership Benchmark"
        description="Assess your AI leadership capabilities and discover how to leverage AI to scale your influence, impact, and income as a technical leader."
        keywords={['AI benchmark', 'leadership assessment', 'technical leadership', 'AI readiness', 'CTO skills']}
      />
      <div className="mb-8">
        <img src="/orange-logo.png" alt="Technical Leaders" className="h-12 w-auto" />
      </div>
      <div className="rm-area-ai-triage"></div>
    </div>
  );
};

export default Benchmark;
