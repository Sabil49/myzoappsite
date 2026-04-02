// CTASection.js
export default function CTASection({ id }) {
  return (
    <section id={id} className="bg-gradient-to-r from-[#2de0a7] to-[#1cb5e0] py-20 text-white text-center">
      <div className="wrap flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Build Your<br />Dream App?</h2>
        <p className="text-lg mb-8 max-w-xl">From MVP to enterprise scale — let's build an app that puts you ahead of the competition.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#pricing" className="btn btn-primary">Start Your Project</a>
          <a href="#portfolio" className="btn btn-ghost-dk">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}
