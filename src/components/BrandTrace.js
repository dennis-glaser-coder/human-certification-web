export default function BrandTrace({ compact = false, light = false }) {
  const classes = ['brandTrace', compact ? 'brandTraceInstitutional' : '', light ? 'brandTraceLight' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} aria-hidden="true">
      <i></i><i></i><i></i><b></b>
    </div>
  );
}
