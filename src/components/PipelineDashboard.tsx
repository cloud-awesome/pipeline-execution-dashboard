export interface PipelineDashboardProps {
  className?: string;
}

export function PipelineDashboard({ className }: PipelineDashboardProps) {
  const rootClassName = ['ped-dashboard', className].filter(Boolean).join(' ');

  return (
    <section className={rootClassName} aria-label="Pipeline execution dashboard">
      <p className="ped-dashboard__placeholder">Pipeline dashboard</p>
    </section>
  );
}
