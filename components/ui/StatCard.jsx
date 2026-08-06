/**
 * Glass "stat-card" container. Styling comes from the `.stat-card` class in
 * globals.css. Pass positioning/animation utilities via `className`.
 */
export default function StatCard({ className = '', children, ...rest }) {
  return (
    <div className={`stat-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
