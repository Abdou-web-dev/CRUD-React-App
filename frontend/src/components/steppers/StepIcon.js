export function StepIcon({ icon, setShowIconSubtitle, infosStep }) {
  return (
    <div
      onMouseOver={() => setShowIconSubtitle(true)}
      onMouseLeave={() => setShowIconSubtitle(false)}
    >
      {icon}
    </div>
  );
}
