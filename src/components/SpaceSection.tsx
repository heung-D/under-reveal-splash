const SpaceSection = () => {
  return (
    <section 
      id="closing-section"
      className="relative overflow-hidden bg-background"
      style={{ height: 'calc(100vh - 100px)' }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center px-6">
          <h2 className="text-[24px] font-bold text-foreground font-rift mb-4" style={{ lineHeight: '120%' }}>
            Beyond the Line, Behind the Shine
          </h2>
          <p className="text-[24px] text-foreground/90 font-rift" style={{ lineHeight: '120%' }}>
            Invisible. Essential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
