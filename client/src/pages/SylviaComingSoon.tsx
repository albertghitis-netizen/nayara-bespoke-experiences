/**
 * SYLVIA — Standalone sub-pages (purple palette)
 * Renders full content for: Trauma, Addiction, Bipolar, Triggers, My Story, Blog, FAQ
 */
import { useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══ PURPLE PALETTE ═══ */
const C = {
  deepPlum: "#2D1B3D",
  amethyst: "#5C3D7A",
  lavender: "#9B7DB8",
  softLilac: "#D4C4E0",
  paleWisteria: "#F5F0F8",
  dustyRose: "#D4A99A",
  text: "#2D1B3D",
  textSoft: "#4A3B5C",
};

/* ═══ GREEN PALETTE (Trauma) ═══ */
const GREEN = {
  deep: "#1B3D2D",
  mid: "#3D7A5C",
  light: "#7DB89B",
  soft: "#C4E0D4",
  pale: "#F0F8F5",
  text: "#1B3D2D",
  textSoft: "#3B5C4A",
};

/* ═══ BLUE PALETTE (Bipolar) ═══ */
const BLUE = {
  deep: "#1B2D3D",
  mid: "#3D5C7A",
  light: "#7D9BB8",
  soft: "#C4D4E0",
  pale: "#F0F5F8",
  text: "#1B2D3D",
  textSoft: "#3B4A5C",
};

/* ═══ ROSE/ORANGE PALETTE (Your Personality) ═══ */
const ROSE = {
  deep: "#8B3A2F",
  mid: "#C4705A",
  light: "#D4A99A",
  soft: "#F0D5CC",
  pale: "#FDF5F2",
  text: "#3D1B1B",
  textSoft: "#5C3B3B",
};

/* ═══ GREY PALETTE (Triggers) ═══ */
const GREY = {
  deep: "#1A1A1A",
  mid: "#4A4A4A",
  light: "#8A8A8A",
  soft: "#D4D4D4",
  pale: "#F5F5F5",
  text: "#1A1A1A",
  textSoft: "#4A4A4A",
};

const display = { fontFamily: "'Playfair Display', serif", fontWeight: 400 } as const;
const body = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 } as const;

/* ═══ SHARED COMPONENTS ═══ */
function PageShell({ children, bg, navColor }: { children: React.ReactNode; bg?: string; navColor?: string }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: bg || C.paleWisteria }}>
      {/* Back nav */}
      <div className="fixed top-6 left-6 z-50">
        <a
          href="/sylvia"
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all hover:opacity-80"
          style={{ background: `${navColor || C.amethyst}cc`, backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-sm">←</span>
        </a>
      </div>
      <div className="max-w-2xl mx-auto px-6 pt-24 pb-20">
        {children}
      </div>
    </div>
  );
}

function InfoSection({ title, children, headingColor, textColor }: { title: string; children: React.ReactNode; headingColor?: string; textColor?: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg" style={{ ...display, color: headingColor || C.amethyst }}>{title}</h3>
      <div className="text-sm leading-relaxed" style={{ ...body, color: textColor || C.textSoft }}>
        {children}
      </div>
    </div>
  );
}

/* ═══ YOUR BRAIN PAGE ═══ */
function YourBrainContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: C.deepPlum }}>Your Brain</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Understanding how your brain works — and why that matters for therapy</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/your-brain-hero_e3899bea.png" alt="Left brain right brain" className="w-full max-w-md rounded-sm" />
      </div>
      <InfoSection title="Left Brain vs Right Brain: The Myth That Won't Die">
        <p>You have probably heard it: left-brained people are logical and analytical, right-brained people are creative and emotional. It is a satisfying story. It gives us a way to explain ourselves. But neuroscience has moved well beyond this. Brain imaging studies consistently show that both hemispheres are active in virtually every cognitive task. Creativity requires logic. Logic requires imagination. The brain does not work in silos.</p>
        <p className="mt-3">What is true is that the two hemispheres do process information differently. The left hemisphere tends toward sequential, language-based, detail-oriented processing. The right hemisphere tends toward holistic, spatial, emotionally-attuned processing. But they work together constantly, communicating through the corpus callosum — a thick bundle of nerve fibers connecting the two sides.</p>
      </InfoSection>
      <InfoSection title="Why This Matters for Therapy">
        <p>Trauma, anxiety, and depression often involve a disconnect between these processing styles. You might understand something intellectually (left hemisphere) but still feel it emotionally as if nothing has changed (right hemisphere). This is why insight alone rarely resolves deep patterns. Effective therapy engages both sides: the narrative, meaning-making capacity of the left brain and the emotional, somatic, relational processing of the right brain.</p>
      </InfoSection>
      <InfoSection title="Neuroplasticity: Your Brain Can Change">
        <p>Your brain is not fixed. It rewires itself based on experience — this is neuroplasticity. Every time you practice a new response, strengthen a new pattern, or process an old memory differently, you are literally changing the physical structure of your brain. Neural pathways that fire together wire together. This is not metaphor. It is biology. And it is the foundation of why therapy works.</p>
      </InfoSection>
      <InfoSection title="The Nervous System and Regulation">
        <p>Your autonomic nervous system has two main branches: the sympathetic (fight-or-flight) and the parasympathetic (rest-and-digest). When these systems are well-regulated, you can move fluidly between activation and calm. When they are dysregulated — often from trauma, chronic stress, or early attachment disruption — you may find yourself stuck in hyperarousal (anxiety, irritability, insomnia) or hypoarousal (numbness, fatigue, disconnection). Much of therapy is about restoring this flexibility.</p>
      </InfoSection>
      <InfoSection title="Your Brain on Stress">
        <p>Chronic stress shrinks the hippocampus (memory and context), weakens the prefrontal cortex (decision-making and impulse control), and enlarges the amygdala (threat detection). This is why stressed people often feel forgetful, reactive, and unable to see the bigger picture. The good news: these changes are reversible. Meditation, exercise, sleep, secure relationships, and therapy all promote structural recovery in these brain regions.</p>
      </InfoSection>
      <InfoSection title="What This Means for You">
        <p>Understanding your brain is not about becoming a neuroscientist. It is about recognizing that your patterns — the anxiety, the avoidance, the people-pleasing, the shutdown — are not character flaws. They are adaptations. Your brain did exactly what it needed to do to keep you safe. Now we can help it learn that safety looks different than it used to.</p>
      </InfoSection>
    </div>
  );
}

/* ═══ YOUR PERSONALITY PAGE (Rose/Orange Palette) ═══ */
function YourPersonalityContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: ROSE.deep }}>Your Personality</h1>
        <p className="text-sm mt-2" style={{ ...body, color: ROSE.textSoft }}>Why understanding your personality is one of the most powerful things you can do for yourself</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/personality-header_e1346ad0.png" alt="Colorful personality silhouette with question marks" className="w-full max-w-lg rounded-sm" />
      </div>

      <InfoSection title="Why Personality Matters" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>Your personality is not just a label or a party trick. It is the lens through which you experience everything: relationships, work, conflict, love, stress, and joy. When you understand your personality deeply, you stop fighting yourself and start working with yourself. You begin to see why certain situations drain you while others energize you, why some relationships feel effortless and others feel like constant friction.</p>
      </InfoSection>

      <InfoSection title="Beyond the Surface" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>Most people have a vague sense of who they are. They know they are introverted or extroverted, sensitive or thick-skinned. But personality runs much deeper than these broad strokes. It shapes how you process emotions, how you handle uncertainty, how you attach to others, and how you respond under pressure. Understanding these patterns gives you choice where before there was only reaction.</p>
      </InfoSection>

      <InfoSection title="Personality and Relationships" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>So much of relationship difficulty comes down to personality differences that neither person understands. What looks like stubbornness might be a need for consistency. What looks like emotional distance might be a need for internal processing time. What looks like neediness might be a deeply wired attachment style. When you understand your own personality — and your partner's — conflict becomes less personal and more navigable.</p>
      </InfoSection>

      <InfoSection title="Personality and Career" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>Many people spend years in careers that look successful from the outside but feel misaligned from the inside. This is often a personality mismatch: a deeply creative person in a rigid structure, a highly sensitive person in a chaotic environment, a natural leader stuck in a role with no autonomy. Understanding your personality helps you make career decisions that honor who you actually are, not who you think you should be.</p>
      </InfoSection>

      <InfoSection title="Personality in Therapy" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>In therapy, understanding your personality helps us work more efficiently. It tells me how you process information, what kind of support feels helpful versus intrusive, how you handle feedback, and what your natural coping strategies are. It also helps you develop self-compassion: many of the things you judge yourself for are simply personality traits that were never validated or understood.</p>
      </InfoSection>

      <InfoSection title="Take a Free Personality Test" headingColor={ROSE.deep} textColor={ROSE.text}>
        <p>If you are curious about your personality type, I recommend taking this free assessment. It is not a diagnostic tool — it is a starting point for self-understanding. Answer honestly, not how you think you should answer. There are no right or wrong results.</p>
        <div className="mt-6 text-center">
          <a
            href="https://mypersonality.net/free-personality-test"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full text-white text-sm tracking-widest uppercase transition-all hover:opacity-90"
            style={{ backgroundColor: ROSE.mid, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Take the Free Personality Test →
          </a>
        </div>
      </InfoSection>
    </div>
  );
}

/* ═══ TRAUMA PAGE (Green Palette) ═══ */
function TraumaContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: GREEN.deep }}>Trauma</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Understanding what trauma is, how it lives in the body, and what healing actually looks like</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/trauma-header_3e6ac90c.png" alt="Two silhouettes representing tangled and organized thoughts" className="w-full max-w-md rounded-sm" />
      </div>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="What Trauma Actually Is">
        <p>Trauma is not what happened to you. Trauma is what happened inside you as a result of what happened to you. It is the nervous system's response to an overwhelming event that exceeded your capacity to cope at the time. This means trauma is not defined by the severity of the event but by the impact it had on your body and mind. A car accident, childhood neglect, a difficult medical procedure, or a relationship where you were consistently dismissed can all leave the same kind of imprint.</p>
      </InfoSection>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="How Trauma Lives in the Body">
        <p>Trauma is not just a memory. It is stored in the body as patterns of tension, hypervigilance, and dysregulated nervous system responses. You might notice it as a tight jaw, shallow breathing, a startle response that seems disproportionate, or a feeling of being "on" all the time. The body keeps the score, as Bessel van der Kolk famously put it. This is why talk therapy alone sometimes is not enough. The body needs to process what the mind already understands.</p>
      </InfoSection>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="Types of Trauma">
        <p><strong>Acute trauma</strong> results from a single overwhelming event: an accident, an assault, a natural disaster. <strong>Chronic trauma</strong> comes from repeated exposure to distressing events: ongoing abuse, living in a war zone, or years of emotional neglect. <strong>Complex trauma</strong> (C-PTSD) develops from prolonged interpersonal trauma, often in childhood, where the source of danger was also the source of safety. <strong>Developmental trauma</strong> occurs when a child's attachment needs are consistently unmet, shaping the brain's wiring for relationships, self-worth, and emotional regulation.</p>
      </InfoSection>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="The Window of Tolerance">
        <p>Everyone has a window of tolerance: a zone where you can experience emotions, think clearly, and respond to stress without becoming overwhelmed or shutting down. Trauma narrows this window. When you are pushed above it, you enter hyperarousal: anxiety, panic, rage, racing thoughts. When you drop below it, you enter hypoarousal: numbness, dissociation, collapse, feeling nothing. The goal of trauma therapy is not to eliminate stress but to widen your window so you can handle more of life without leaving it.</p>
      </InfoSection>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="How I Work With Trauma">
        <p>I use a combination of EMDR (Eye Movement Desensitization and Reprocessing), somatic approaches, and relational therapy. We start with stabilization: building the internal resources and coping skills you need before we touch the trauma directly. Then we process at your pace. You do not need to recount every detail. EMDR works with the brain's natural healing mechanisms to reprocess traumatic memories so they lose their emotional charge. The memory remains, but the distress fades. Most clients describe it as the difference between remembering something painful and reliving it.</p>
      </InfoSection>
      <InfoSection headingColor={GREEN.mid} textColor={GREEN.textSoft} title="Signs You Might Be Carrying Unprocessed Trauma">
        <p>You feel fine most of the time but occasionally get hijacked by intense emotions that seem to come from nowhere. You avoid certain places, people, or conversations without fully understanding why. You have difficulty trusting people even when they have given you no reason not to. You are hypervigilant in relationships, always scanning for signs of rejection or danger. You feel disconnected from your body or emotions. You have physical symptoms (chronic pain, digestive issues, insomnia) that have no clear medical explanation. You are successful by every external measure but feel empty, anxious, or numb inside.</p>
      </InfoSection>
    </div>
  );
}

/* ═══ ADDICTION PAGE ═══ */
function AddictionContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: C.deepPlum }}>Addiction</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Understanding addiction as a brain disease, not a moral failing</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/addiction-header2_63818450.png" alt="Person breaking free from addiction ball and chain" className="w-full max-w-sm rounded-sm" />
      </div>
      <InfoSection title="What Addiction Actually Is">
        <p>Addiction is a chronic brain disorder characterized by compulsive substance use or behavior despite harmful consequences. It is not a choice, a moral failing, or a lack of willpower. The American Society of Addiction Medicine defines it as a primary disease of brain reward, motivation, memory, and related circuitry. When someone is addicted, their brain has been fundamentally altered in ways that make stopping extraordinarily difficult without support.</p>
      </InfoSection>
      <InfoSection title="The Neuroscience of Addiction">
        <p>Addictive substances and behaviors hijack the brain's reward system by flooding it with dopamine at levels far beyond what natural rewards produce. Over time, the brain adapts by reducing its own dopamine production and receptor sensitivity. This creates tolerance (needing more to feel the same effect) and dependence (feeling terrible without it). The prefrontal cortex, responsible for decision-making and impulse control, becomes impaired while the amygdala, which drives fear and stress responses, becomes hyperactive.</p>
      </InfoSection>
      <InfoSection title="Why People Use">
        <p>Nobody wakes up and decides to become addicted. Substance use typically begins as a solution to a problem: pain, anxiety, trauma, social isolation, boredom, or a nervous system that never learned to regulate itself. The substance works, temporarily. It provides relief that nothing else has. Understanding what the substance was solving is essential to recovery because you cannot take away someone's only coping mechanism without replacing it with something that works.</p>
      </InfoSection>
      <InfoSection title="Recovery Is Not Linear">
        <p>Relapse is not failure. It is a common part of the recovery process, occurring in 40-60% of people in recovery, which is comparable to relapse rates for other chronic diseases like diabetes and hypertension. Each relapse provides information about what triggered it and what needs to be strengthened in the recovery plan. The goal is not perfection. It is progress, self-awareness, and building a life where using becomes less necessary.</p>
      </InfoSection>
      <InfoSection title="How I Work With Addiction">
        <p>I treat addiction as inseparable from the underlying conditions that drive it. This means addressing trauma, mood disorders, attachment wounds, and identity alongside the substance use itself. I use a combination of motivational interviewing, relapse prevention, IFS (Internal Family Systems), and somatic approaches. I do not use shame, confrontation, or "tough love" because decades of research show these approaches increase relapse rather than prevent it.</p>
      </InfoSection>
      <InfoSection title="Dual Diagnosis">
        <p>Most people with addiction also have a co-occurring mental health condition: depression, anxiety, PTSD, bipolar disorder, or ADHD. Treating one without the other almost always fails. If you treat the addiction but not the depression, the depression drives relapse. If you treat the depression but not the addiction, the substance use undermines the treatment. Integrated treatment that addresses both simultaneously produces the best outcomes.</p>
      </InfoSection>
    </div>
  );
}

/* ═══ BIPOLAR PAGE ═══ */
function BipolarContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: BLUE.deep }}>Bipolar Disorder</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Living with bipolar is not about eliminating episodes — it is about understanding your patterns</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/bipolar-header_4d7663ff.png" alt="Two overlapping head silhouettes representing dual states of mind" className="w-full max-w-sm rounded-sm" />
      </div>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="What Bipolar Disorder Is">
        <p>Bipolar disorder is a mood disorder characterized by alternating episodes of mania (or hypomania) and depression. It is not "mood swings." It is a neurobiological condition that affects energy, sleep, cognition, and behavior in profound and often cyclical ways. There are several types, and understanding which type you have changes everything about how you manage it.</p>
      </InfoSection>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="Bipolar I vs Bipolar II">
        <p><strong>Bipolar I</strong> involves full manic episodes that last at least 7 days (or require hospitalization). Mania can include grandiosity, decreased need for sleep, pressured speech, racing thoughts, and impulsive behavior that causes real damage. <strong>Bipolar II</strong> involves hypomanic episodes (less severe, lasting at least 4 days) and major depressive episodes. Bipolar II is not "milder" — the depressions are often more severe and longer-lasting. <strong>Cyclothymia</strong> involves chronic fluctuating mood with periods of hypomanic and depressive symptoms that do not meet full criteria for either episode.</p>
      </InfoSection>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="Why Bipolar Is Often Misdiagnosed">
        <p>The average time from first symptoms to correct diagnosis is 5-10 years. This happens because people usually seek help during depression, not mania. Hypomania often feels good — productive, creative, social — so it goes unreported. Antidepressants prescribed for "depression" can trigger mania or rapid cycling in undiagnosed bipolar, making things worse. If antidepressants have ever made you feel agitated, wired, or worse, bipolar should be considered.</p>
      </InfoSection>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="The Role of Sleep and Routine">
        <p>Disrupted sleep is both a symptom and a trigger of bipolar episodes. Maintaining a consistent sleep-wake cycle is one of the most powerful stabilizers available. Social Rhythm Therapy (IPSRT) is an evidence-based approach that helps people with bipolar maintain regular daily routines. Even small disruptions — a late night, jet lag, a weekend of irregular sleep — can destabilize mood in vulnerable individuals.</p>
      </InfoSection>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="How I Work With Bipolar">
        <p>I help clients develop a deep understanding of their personal patterns: what triggers episodes, what the early warning signs look like, and what interventions work at each stage. I collaborate with psychiatrists on medication management. I also help with the relational impact: how to communicate with partners and family about what you need, and how to rebuild trust after episodes that may have caused damage.</p>
      </InfoSection>
      <InfoSection headingColor={BLUE.mid} textColor={BLUE.textSoft} title="Signs You Might Have Bipolar Disorder">
        <p>You have periods of unusually high energy, decreased need for sleep, and increased productivity followed by crashes into depression. Antidepressants have made you feel worse, agitated, or "wired." You have a family history of bipolar disorder. You make impulsive decisions during high-energy periods that you later regret. Your depression feels heavy and physical, not just sad. You have been treated for depression multiple times without lasting improvement. Your mood changes seem to follow a pattern or cycle. You feel like you are living two different lives.</p>
      </InfoSection>
    </div>
  );
}

/* ═══ TRIGGERS PAGE ═══ */
function TriggersContent() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: GREY.deep }}>Triggers</h1>
        <p className="text-sm mt-2" style={{ ...body, color: GREY.textSoft }}>Know what destabilizes you before it happens</p>
      </div>
      <div className="flex justify-center mb-8">
        <img src="/manus-storage/triggers-header_33e7a9ce.png" alt="Finger pressing buttons on a head representing emotional triggers" className="w-full max-w-xs rounded-sm" />
      </div>
      <InfoSection title="What Are Triggers" headingColor={GREY.deep} textColor={GREY.text}>
        <p>Triggers are situations, emotions, people, places, or internal states that increase the risk of either a mood episode or a relapse. Triggers often overlap: the same stressor that destabilizes your mood also activates cravings. Identifying your personal triggers is the first line of defense because you cannot manage what you do not recognize.</p>
      </InfoSection>
      <InfoSection title="HALT: Hungry, Angry, Lonely, Tired" headingColor={GREY.deep} textColor={GREY.text}>
        <p>These four basic states are the most common precursors to both mood destabilization and relapse. They are deceptively simple but profoundly dangerous. When you are in a HALT state, your brain's prefrontal cortex (the part that makes good decisions) is compromised. Checking in with yourself using HALT before any major decision is a foundational recovery skill.</p>
      </InfoSection>
      <InfoSection title="Emotional vs. Environmental Triggers" headingColor={GREY.deep} textColor={GREY.text}>
        <p>Emotional triggers are internal states like shame, boredom, excitement, loneliness, or anger that activate craving or mood instability. Environmental triggers are external: a bar you used to drink at, a person you used with, a song associated with past use, or even a time of day. Both types require different strategies. Emotional triggers need coping skills. Environmental triggers need avoidance or reframing.</p>
      </InfoSection>
      <InfoSection title="Positive Events as Triggers" headingColor={GREY.deep} textColor={GREY.text}>
        <p>Falling in love, getting a promotion, celebrating a milestone, or any intense positive emotion can trigger hypomania. Celebrations are also high-risk because they are culturally associated with substance use. Positive triggers are harder to recognize because they feel good, which makes them more dangerous.</p>
      </InfoSection>
      <InfoSection title="Building a Trigger Management Plan" headingColor={GREY.deep} textColor={GREY.text}>
        <p>List your known triggers. For each one, write down the early warning signs (what you feel in your body and mind), the action plan (what you will do instead of using or spiraling), and the support contact (who you will call). Review this plan with your therapist. Keep it accessible on your phone. The time to build the plan is when you are stable, not when you are in crisis.</p>
      </InfoSection>
    </div>
  );
}

/* ═══ MY STORY PAGE ═══ */
function MyStoryContent() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-3xl md:text-4xl leading-tight tracking-tight mb-6 text-center" style={{ ...display, color: C.deepPlum }}>
          My Story
        </h1>
        <div className="flex justify-center mb-8">
          <img src="/manus-storage/my-story-header_aafe862c.png" alt="Sylvia - therapist portrait" className="w-full max-w-xs rounded-sm" />
        </div>
        <div className="space-y-5 text-sm md:text-base leading-relaxed" style={{ ...body, color: C.textSoft }}>
          <p>
            I arrived in the United States at seventeen with a suitcase, a few hundred dollars, and no one waiting for me at the airport. I had left Germany not because I wanted adventure, but because staying felt impossible. The details of why are mine, but the shape of it is something many of my clients recognize: a home that looked fine from the outside and felt unbearable from within.
          </p>
          <p>
            Those first years were not romantic. I cleaned hotel rooms. I waitressed doubles on weekends. I worked the overnight shift at a gas station where I taught myself English by reading the backs of cereal boxes during the slow hours. I shared apartments with strangers, missed holidays alone, and learned what it means to be invisible in a country that doesn't know your name.
          </p>
          <p>
            What I didn't know then was that those years were teaching me everything I would later need as a therapist.
          </p>
          <p>
            I learned what it feels like to sit across from someone who holds power over your life and not be able to say what you actually think. I learned what it's like to carry grief that no one around you can see. I learned that survival is not the same as living, and that "getting through it" can become its own kind of prison if you never stop to ask what you lost along the way.
          </p>
          <p>
            I also learned perseverance. Not the inspirational poster kind. The quiet, stubborn, sometimes ugly kind where you keep going because the alternative is worse. I learned that resilience isn't about being strong. It's about being honest with yourself about what hurts and choosing to move toward something better anyway.
          </p>
          <p>
            Eventually, I put myself through school. Then graduate school. Then licensure. I specialized in trauma because I understood it from the inside, not just from textbooks. When a client tells me they feel like they're performing a version of themselves that everyone else believes is real, I don't need them to explain. When someone says they've "made it" but can't figure out why they still feel empty, I know exactly what they mean.
          </p>
          <p>
            My background doesn't make me a better therapist because of some redemption arc. It makes me a better therapist because I've sat in the places my clients sit. I know what it's like to need help and not know how to ask for it. I know what it's like to finally be safe and realize you don't know how to stop bracing for impact.
          </p>
          <p>
            That's why I do this work. Not because I figured everything out, but because I know what it costs to carry things alone. And I know, from my own life, that it doesn't have to stay that way.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══ BLOG PAGE ═══ */
function BlogContent() {
  const blogPosts = [
    { slug: "left-brain-right-brain-myth", title: "Left Brain vs Right Brain: The Myth That Won't Die", subtitle: "Why you are not one or the other, and what neuroscience actually says.", tags: ["Neuroscience", "Brain Myths"], readingTime: 9 },
    { slug: "personality-tests-what-they-miss", title: "Personality Tests: What They Get Right and What They Miss", subtitle: "MBTI, Enneagram, Big Five — a therapist's honest take.", tags: ["Personality", "Self-Knowledge"], readingTime: 10 },
    { slug: "relationships-101-attachment-styles", title: "Relationships 101: Why You Keep Choosing the Same Person", subtitle: "Attachment styles, patterns, and how to break the cycle.", tags: ["Relationships", "Attachment"], readingTime: 11 },
    { slug: "therapist-vs-life-coach", title: "Why a Therapist Is Basically a Life Coach (But Better)", subtitle: "The overlap, the differences, and why credentials matter.", tags: ["Therapy", "Life Coaching"], readingTime: 8 },
    { slug: "types-of-bipolar-disorder", title: "The Different Types of Bipolar Disorder", subtitle: "Bipolar I, Bipolar II, and Cyclothymia — what sets them apart.", tags: ["Bipolar", "Mood Disorders"], readingTime: 10 },
    { slug: "neurotransmitters-and-mental-health", title: "Your Neurotransmitters: The Chemical Messengers Behind How You Feel", subtitle: "Serotonin, dopamine, GABA and why they matter for your mental health.", tags: ["Neuroscience", "Mental Health"], readingTime: 11 },
    { slug: "what-actually-happens-in-trauma-therapy", title: "What Actually Happens in Trauma Therapy", subtitle: "Demystifying the process so you can stop avoiding it.", tags: ["Trauma", "Therapy"], readingTime: 10 },
    { slug: "psychologist-vs-psychiatrist-vs-therapist", title: "Psychologist vs Psychiatrist vs Therapist", subtitle: "What you actually need to know before booking.", tags: ["Therapy", "Mental Health"], readingTime: 8 },
    { slug: "high-functioning-does-not-mean-fine", title: "High-Functioning Does Not Mean Fine", subtitle: "For the people who look together but are struggling.", tags: ["Depression", "Anxiety"], readingTime: 9 },
    { slug: "living-with-bipolar-stability", title: "Living With Bipolar: What Stability Actually Looks Like", subtitle: "It is not about eliminating episodes.", tags: ["Bipolar", "Mood Disorders"], readingTime: 10 },
    { slug: "dual-diagnosis-addiction-mental-health", title: "Dual Diagnosis: When Addiction and Mental Health Collide", subtitle: "Why treating one without the other fails.", tags: ["Addiction", "Dual Diagnosis"], readingTime: 11 },
    { slug: "addiction-recovery-is-not-linear", title: "Addiction Recovery Is Not Linear", subtitle: "Relapse is part of the process, not a failure.", tags: ["Addiction", "Recovery"], readingTime: 9 },
    { slug: "teen-brain-social-media", title: "Your Teenager's Brain on Social Media", subtitle: "What parents should know, without the panic.", tags: ["Adolescents", "Social Media"], readingTime: 10 },
    { slug: "why-just-think-positive-is-terrible-advice", title: "Why 'Just Think Positive' Is Terrible Advice", subtitle: "The problem with toxic positivity.", tags: ["Mental Health", "Emotions"], readingTime: 8 },
    { slug: "power-of-mood-tracking", title: "The Power of Tracking Your Mood", subtitle: "Even when you do not want to.", tags: ["Self-Tracking", "Mood"], readingTime: 8 },
    { slug: "sleep-and-mental-health", title: "Sleep, Mood, and the Patterns You Are Missing", subtitle: "Why sleep is the first thing I ask about.", tags: ["Sleep", "Mood Disorders"], readingTime: 9 },
    { slug: "getting-started-with-parts-ifs", title: "Getting Started With Parts: A Gentle Introduction to IFS", subtitle: "How to tell the difference between a part and your true Self.", tags: ["IFS", "Parts Work"], readingTime: 10 },
    { slug: "understanding-your-protectors", title: "Understanding Your Protectors", subtitle: "The anger, the critic, the cynic — they are trying to help.", tags: ["IFS", "Protectors"], readingTime: 9 },
    { slug: "why-gratitude-feels-impossible-after-trauma", title: "Why Gratitude Feels Impossible After Trauma", subtitle: "It is not a mindset problem. Your nervous system is involved.", tags: ["IFS", "Trauma", "Gratitude"], readingTime: 11 },
    { slug: "after-unburdening-what-comes-next", title: "After Unburdening: What Comes Next", subtitle: "The first 30 days after a part releases its burden.", tags: ["IFS", "Unburdening"], readingTime: 9 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: C.deepPlum }}>Blog</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Thoughts on trauma, recovery, and living well.</p>
      </div>
      <div className="space-y-3">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="block rounded-xl p-5 transition-all duration-200 hover:shadow-md"
            style={{ background: `${C.softLilac}60` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium leading-snug" style={{ ...display, color: C.deepPlum }}>
                  {post.title}
                </h3>
                <p className="text-sm mt-1 opacity-60 leading-relaxed" style={body}>
                  {post.subtitle}
                </p>
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
                      style={{ background: `${C.amethyst}20`, color: C.amethyst, ...body, fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] opacity-40" style={body}>{post.readingTime} min read</span>
                </div>
              </div>
              <span className="text-lg opacity-30 mt-1">&rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ═══ FAQ PAGE ═══ */
const FAQ_DATA = [
  {
    title: "Trauma Therapy",
    color: C.amethyst,
    items: [
      { q: "Will I have to talk about all the details of my trauma?", a: "No. In therapies like EMDR and Somatic Experiencing, you do not need to share every detail. We can process the trauma without you having to recount the entire story." },
      { q: "How long does trauma therapy take?", a: "It varies for everyone. Some people see significant improvement with EMDR in just a few sessions, while others may need several months of therapy to fully process their experiences." },
      { q: "What if I get overwhelmed during a session?", a: "Your safety is the priority. We will spend time building grounding and coping skills before we start processing trauma, so you have tools to manage if you feel overwhelmed." },
      { q: "Is EMDR better than regular talk therapy?", a: "EMDR is specifically designed to process trauma and is often faster and more effective for PTSD than traditional talk therapy, which may not address how trauma is stored in the brain and body." },
    ],
  },
  {
    title: "Bipolar Disorder",
    color: C.lavender,
    items: [
      { q: "What does stability look like in bipolar disorder?", a: "Stability is not the absence of mood changes. It is the ability to manage them effectively through routine, medication, and self-awareness." },
      { q: "Why is sleep hygiene important for bipolar disorder?", a: "Disrupted sleep is a common trigger for manic episodes. Maintaining a consistent sleep schedule helps stabilize your circadian rhythm and mood." },
      { q: "What should I do if I want to stop taking my bipolar medication?", a: "Never stop taking your medication abruptly. Always consult your psychiatrist to discuss side effects and explore alternative dosages or medications." },
      { q: "What are early warning signs of a bipolar episode?", a: "Early warning signs can include subtle changes in sleep needs, speech patterns, energy levels, or sudden urges to start new projects." },
    ],
  },
  {
    title: "Addiction & Recovery",
    color: C.dustyRose,
    items: [
      { q: "What is a dual diagnosis?", a: "A dual diagnosis, also known as co-occurring disorders, means having a mental health disorder (like depression or anxiety) and a substance use disorder at the same time." },
      { q: "Is relapse a failure?", a: "No. Relapse occurs in 40-60% of people in recovery, comparable to relapse rates for other chronic diseases. Each relapse provides information about what triggered it and what needs to be strengthened." },
      { q: "Why do people use substances?", a: "Substance use typically begins as a solution to a problem: pain, anxiety, trauma, social isolation, or a nervous system that never learned to regulate itself. Understanding what the substance was solving is essential to recovery." },
      { q: "Can you be addicted to behaviors, not just substances?", a: "Yes. Process addictions (gambling, sex, shopping, gaming) activate the same reward pathways as substances and can be equally destructive." },
    ],
  },
  {
    title: "IFS (Internal Family Systems)",
    color: C.amethyst,
    items: [
      { q: "What is a 'part' in IFS?", a: "A part is a distinct sub-personality within your internal system. Each part has its own feelings, beliefs, and motivations. Parts are not disorders — they are natural aspects of the mind." },
      { q: "What is Self in IFS?", a: "Self (capital S) is your core essence — the you that exists beneath all your parts. It is characterized by the 8 C's: Curiosity, Calm, Clarity, Compassion, Confidence, Courage, Creativity, and Connectedness." },
      { q: "What is unburdening?", a: "Unburdening is the process where an exile (wounded part) releases the pain, beliefs, and emotions it has been carrying, often since childhood. It is one of the most transformative moments in IFS therapy." },
      { q: "Do I need a therapist for IFS?", a: "While you can develop awareness of your parts on your own, deep work — especially with exiles — should be done with a trained IFS therapist for safety and proper support." },
    ],
  },
  {
    title: "Neurotransmitters & Brain Chemistry",
    color: C.lavender,
    items: [
      { q: "Can you test your neurotransmitter levels?", a: "There is no reliable clinical test for brain neurotransmitter levels. Blood tests measure peripheral levels, which do not accurately reflect what is happening in the brain. Diagnosis is based on symptoms, not lab values." },
      { q: "Do antidepressants create artificial happiness?", a: "No. SSRIs and similar medications do not create emotions. They restore the brain's ability to regulate mood naturally by correcting chemical imbalances." },
      { q: "Why do some medications take weeks to work?", a: "SSRIs and similar medications need time because they work by gradually changing receptor sensitivity and neurotransmitter availability. The brain needs to adapt, which typically takes 2 to 6 weeks." },
      { q: "What is the role of GABA in anxiety?", a: "GABA is the brain's primary inhibitory neurotransmitter. It calms neural activity. Low GABA is associated with anxiety, insomnia, and seizures. Benzodiazepines work by enhancing GABA's effects." },
    ],
  },
  {
    title: "Finding a Provider",
    color: C.dustyRose,
    items: [
      { q: "What is the difference between a therapist and a psychologist?", a: "A psychologist has a doctoral degree and extensive training in psychological testing. A therapist typically has a master's degree and focuses primarily on counseling and talk therapy." },
      { q: "Should I see a psychiatrist or a therapist first?", a: "If you are experiencing severe symptoms that might require medication, a psychiatrist is a good starting point. For stress, relationship issues, or mild to moderate concerns, starting with a therapist is often recommended." },
      { q: "Do I need both a psychiatrist and a therapist?", a: "Many people benefit from both. A psychiatrist manages medication while a therapist provides ongoing talk therapy to help you develop coping strategies and work through underlying issues." },
    ],
  },
];

function FAQContent() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl" style={{ ...display, color: C.deepPlum }}>Frequently Asked Questions</h1>
        <p className="text-sm mt-2 opacity-60" style={body}>Everything you need to know, organized by topic</p>
      </div>
      {FAQ_DATA.map((section, sIdx) => (
        <div key={section.title} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${section.color}30` }}>
          <button
            onClick={() => setOpenSection(openSection === sIdx ? null : sIdx)}
            className="w-full flex items-center gap-3 p-4 text-left transition-colors"
            style={{ background: openSection === sIdx ? `${section.color}15` : "white" }}
          >
            <span className="flex-1 text-base font-semibold" style={{ ...display, color: section.color }}>
              {section.title}
            </span>
            <motion.span
              animate={{ rotate: openSection === sIdx ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm opacity-40"
            >
              ▼
            </motion.span>
          </button>
          <AnimatePresence>
            {openSection === sIdx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-2">
                  {section.items.map((item) => {
                    const key = `${sIdx}-${item.q}`;
                    return (
                      <div key={key} className="rounded-lg" style={{ background: `${C.softLilac}30` }}>
                        <button
                          onClick={() => setOpenQ(openQ === key ? null : key)}
                          className="w-full text-left p-3 flex items-start gap-2"
                        >
                          <span className="text-xs mt-0.5 shrink-0" style={{ color: section.color }}>{openQ === key ? "▲" : "▼"}</span>
                          <span className="text-sm font-medium" style={{ ...body, color: C.deepPlum }}>{item.q}</span>
                        </button>
                        <AnimatePresence>
                          {openQ === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="px-3 pb-3 text-sm leading-relaxed opacity-70" style={body}>
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ═══ WHO I HELP PAGE ═══ */
function WhoIHelpContent() {
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl mb-4" style={{ ...display, color: GREEN.text }}>Who I Help</h1>
      </div>

      <div className="space-y-5 text-base leading-relaxed" style={{ ...body, color: GREEN.textSoft }}>
        <p>You are good at what you do. Really good.</p>
        <p>From the outside, your life may look successful, stable, even full. You manage a great deal — responsibilities, relationships, expectations, pressure — often without slowing down long enough to notice what it's costing you internally.</p>
        <p>And yet, something still feels off.</p>
        <p>You may feel emotionally exhausted despite functioning well. Disconnected from yourself or the people around you. Stuck in patterns that no longer feel sustainable. Always managing, anticipating, performing, carrying.</p>
        <p className="italic" style={{ color: GREEN.mid }}>You don't really stop.</p>
        <p>Over time, relationships can begin to feel more tense, more distant, or less fulfilling than you want them to. You may notice yourself reacting quickly, shutting down, overthinking, people-pleasing, or feeling responsible for everyone else while quietly neglecting yourself.</p>
        <p>This work is for people who are ready for more than coping. People who want to feel more connected, more present, more emotionally alive — and more at home in the lives they've built.</p>
      </div>

      <div className="mt-10 py-8 px-6 rounded-sm text-center" style={{ backgroundColor: GREEN.soft }}>
        <p className="text-base italic leading-relaxed" style={{ ...body, color: GREEN.text }}>
          If nothing in your life changed a year from now, would that feel okay?
        </p>
        <p className="text-sm mt-3" style={{ ...body, color: GREEN.textSoft }}>
          If the answer is no, this may be a place to begin.
        </p>
      </div>

      {/* Possibilities section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl mb-6" style={{ ...display, color: GREEN.text }}>Possibilities</h2>
        <p className="text-sm uppercase tracking-widest mb-6" style={{ ...body, color: GREEN.mid }}>This is what I often see happen.</p>
        <div className="space-y-5 text-base leading-relaxed" style={{ ...body, color: GREEN.textSoft }}>
          <p>The internal noise quiets down. That critical voice that has been running in the background for years begins to lose some of its hold. You start noticing it differently — and over time, relating to yourself with more understanding and less pressure.</p>
          <p>Old reactions don't disappear overnight. The shutting down, the snapping, the quietly carrying everything alone. But they begin to loosen. And when they do, there's more space — for connection in your relationships, more ease within yourself, and a fuller presence in the life you have built.</p>
          <p>The constant pressure to chase the next thing often begins to settle. Not because ambition disappears — but because it's no longer carrying the same emotional weight.</p>
          <p>People often find themselves responding differently — less reactive, more grounded, and more intentional in the way they move through life.</p>
          <p>Decisions begin to come from a clearer place. Not perfect decisions — but ones that feel less driven by pressure, fear, or the need to prove something.</p>
          <p className="italic" style={{ color: GREEN.mid }}>Not because you became someone new.</p>
          <p>But because life no longer feels quite so far away from you.</p>
        </div>
      </div>
    </div>
  );
}

/* ═══ MY APPROACH PAGE ═══ */
function MyApproachContent() {
  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl mb-4" style={{ ...display, color: C.deepPlum }}>My Approach</h1>
      </div>

      <div className="space-y-5 text-base leading-relaxed" style={{ ...body, color: C.textSoft }}>
        <p>Most of my clients are insightful. They understand their patterns. They can often explain exactly why they react the way they do.</p>
        <p>And yet, understanding it hasn't been enough to change it.</p>
        <p>That's because the part of us that analyzes and understands is not always the same part carrying the emotional experience. You can know something logically and still feel stuck in the same reactions, fears, pressure, or disconnection.</p>
        <p>Real change happens when insight connects with what's happening underneath the surface — emotionally, relationally, and physically.</p>
        <p>This work is not about forcing change or talking yourself into it. We work beneath the surface of what you already know — toward change that shows up in your relationships, your reactions, and the way you move through your life.</p>
      </div>

      {/* Services/Modalities */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl mb-4" style={{ ...display, color: C.deepPlum }}>Services / Modalities</h2>
        <p className="text-sm leading-relaxed mb-8" style={{ ...body, color: C.textSoft }}>
          There is no single path through this work. What I use depends on you — where you are, what you're carrying, and what your system needs to shift. These are the approaches I draw from.
        </p>

        <div className="space-y-10">
          <InfoSection title="EMDR" headingColor={C.amethyst} textColor={C.textSoft}>
            <div className="space-y-3">
              <p>Sometimes you can understand something completely — and still feel it as if it just happened. That gap between knowing and feeling is where EMDR works.</p>
              <p>EMDR uses gentle bilateral stimulation — tapping, eye movements, or sound — to help the thinking and feeling parts of the brain process together. Instead of talking around a painful memory, we work with it directly. Not by reliving it, but by helping the brain do what it was always trying to do: process it and move forward.</p>
              <p>Most people notice how differently an old memory can feel when it no longer carries the same charge.</p>
            </div>
          </InfoSection>

          <InfoSection title="IFS — Internal Family Systems" headingColor={C.amethyst} textColor={C.textSoft}>
            <div className="space-y-3">
              <p>You've probably noticed that different parts of you want different things. One part is exhausted and wants rest. Another says there's no time. One part wants to be closer to the people you love. Another doesn't quite know how.</p>
              <p>This isn't a contradiction. It's how the mind organizes itself.</p>
              <p>In our work, we get curious about these parts instead of fighting them. We look at where they came from, what they've been trying to protect, and what they need now.</p>
              <p>That shift — from inner conflict to understanding — is often where lasting change begins.</p>
            </div>
          </InfoSection>

          <InfoSection title="Trauma-Informed Hypnotherapy" headingColor={C.amethyst} textColor={C.textSoft}>
            <div className="space-y-3">
              <p>Hypnotherapy is not what you've seen on television.</p>
              <p>You're not asleep. You're not under anyone's control. You're simply in a deeply relaxed, focused state — one where the overthinking mind steps back and something deeper becomes accessible.</p>
              <p>In that state, the brain becomes more open to change — what neuroscience calls memory reconsolidation. An old emotional imprint can be updated. Not erased. Updated. The memory stays, but the weight it carries can shift.</p>
              <p>For people who have spent years thinking their way through everything, this often reaches what thinking alone cannot.</p>
            </div>
          </InfoSection>

          <InfoSection title="Ketamine-Assisted Therapy" headingColor={C.amethyst} textColor={C.textSoft}>
            <div className="space-y-3">
              <p>Ketamine-Assisted Therapy combines the effects of ketamine with the support of psychotherapy.</p>
              <p>It creates a temporary window where the brain becomes more open — where stuck patterns can loosen and new perspectives can emerge.</p>
              <p>Within a therapeutic setting, this can allow you to access insight, process difficult emotional states, and shift patterns that have felt hard to move.</p>
              <p>It's not a standalone experience. The work before and after — making sense of what comes up and integrating it — is what allows the change to last.</p>
            </div>
          </InfoSection>

          <InfoSection title="PDP Behavioral Assessment" headingColor={C.amethyst} textColor={C.textSoft}>
            <div className="space-y-3">
              <p>Sometimes the most useful place to start is understanding how you're wired.</p>
              <p>The PDP ProScan is a behavioral assessment that shows how you naturally think, make decisions, communicate, and respond under pressure — and where the gap is between who you are and who you feel you need to be.</p>
              <p>I use this with individuals, couples, and organizations. It's especially useful for people in leadership roles who want a clearer picture of how their patterns affect the people around them.</p>
            </div>
          </InfoSection>
        </div>
      </div>
    </div>
  );
}

/* ═══ ROUTER ═══ */
export default function SylviaComingSoon() {
  const [location] = useLocation();

  const renderContent = () => {
    switch (location) {
      case "/sylvia/your-brain":
        return <YourBrainContent />;
      case "/sylvia/your-personality":
        return <YourPersonalityContent />;
      case "/sylvia/trauma":
        return <TraumaContent />;
      case "/sylvia/addiction":
        return <AddictionContent />;
      case "/sylvia/mood-disorders":
      case "/sylvia/bipolar":
        return <BipolarContent />;
      case "/sylvia/triggers":
        return <TriggersContent />;
      case "/sylvia/my-story":
        return <MyStoryContent />;
      case "/sylvia/who-i-help":
        return <WhoIHelpContent />;
      case "/sylvia/my-approach":
        return <MyApproachContent />;
      case "/sylvia/blog":
        return <BlogContent />;
      case "/sylvia/faq":
        return <FAQContent />;
      default:
        return (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl" style={{ ...display, color: C.deepPlum }}>Coming Soon</h1>
            <p className="text-lg mt-4 opacity-60" style={body}>This page is being prepared.</p>
          </div>
        );
    }
  };

  const getTheme = () => {
    switch (location) {
      case "/sylvia/trauma":
        return { bg: GREEN.pale, navColor: GREEN.mid };
      case "/sylvia/mood-disorders":
      case "/sylvia/bipolar":
        return { bg: BLUE.pale, navColor: BLUE.mid };
      case "/sylvia/your-personality":
        return { bg: ROSE.pale, navColor: ROSE.mid };
      case "/sylvia/triggers":
        return { bg: "#FFFFFF", navColor: GREY.mid };
      case "/sylvia/who-i-help":
        return { bg: GREEN.pale, navColor: GREEN.mid };
      default:
        return {};
    }
  };

  const theme = getTheme();

  return (
    <PageShell bg={theme.bg} navColor={theme.navColor}>
      {renderContent()}
    </PageShell>
  );
}
