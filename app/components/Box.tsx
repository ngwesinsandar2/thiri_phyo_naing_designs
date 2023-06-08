const Box = ({ custom_classes }: { custom_classes?: string }) => {
  return (
    <div className={`w-24 h-24 border-t-[1rem] border-l-[1rem] border-[var(--milk)] absolute ${custom_classes}`}></div>
  );
}

export default Box;