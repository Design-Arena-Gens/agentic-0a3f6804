'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const manipulationTactics = [
  {
    title: "Gaslighting",
    description: "Reality distortion. Make them question their memory, perception, sanity.",
    analysis: "The manipulator denies facts, creates confusion, isolates the victim from support. Power lies in controlling what is 'real'.",
    defense: "Trust your records. Document everything. External validation breaks the illusion."
  },
  {
    title: "Intermittent Reinforcement",
    description: "Unpredictable rewards. Keep them addicted to approval.",
    analysis: "Like a slot machine. Random kindness creates dependency. They chase the 'good version' of you.",
    defense: "Recognize the pattern. Consistent behavior is predictable. Chaos is a weapon."
  },
  {
    title: "Triangulation",
    description: "Use a third party. Create jealousy, competition, insecurity.",
    analysis: "Divide attention. Make them compete for validation. You remain the prize.",
    defense: "Direct communication. Refuse to compete. The game ends when you stop playing."
  },
  {
    title: "Love Bombing",
    description: "Overwhelming affection. Fast intimacy. Then withdrawal.",
    analysis: "Create artificial closeness. Build dependency. Then control through withholding.",
    defense: "Healthy relationships build slowly. Intensity equals instability."
  },
  {
    title: "Projection",
    description: "Accuse others of your own faults. Attack first.",
    analysis: "Offensive defense. By accusing them, you deflect examination of yourself.",
    defense: "Watch for pattern reversal. The accusation often reveals the accuser."
  },
  {
    title: "Silent Treatment",
    description: "Weaponized silence. Emotional abandonment as punishment.",
    analysis: "Withdrawal of presence creates anxiety. They will pursue, apologize, submit.",
    defense: "Don't chase. Silence is only powerful if you fear it."
  }
];

const biases = [
  {
    name: "Confirmation Bias",
    exploit: "People see what they want to see. Feed their beliefs. They'll ignore contradictions.",
    example: "Present data that confirms their worldview. They'll dismiss everything else."
  },
  {
    name: "Authority Bias",
    exploit: "Humans obey perceived authority. Establish credentials. They'll stop questioning.",
    example: "Titles, diplomas, confident tone. Authority bypasses critical thinking."
  },
  {
    name: "Anchoring Effect",
    exploit: "First number sets the baseline. Start high or low. They'll negotiate from your anchor.",
    example: "Price negotiations, time estimates. The anchor controls the range."
  },
  {
    name: "Scarcity Principle",
    exploit: "Limited availability creates urgency. Make it rare. They'll want it more.",
    example: "'Only 3 spots left.' Artificial scarcity triggers fear of loss."
  },
  {
    name: "Social Proof",
    exploit: "People follow crowds. Show them others are doing it. They'll conform.",
    example: "'Everyone is buying this.' Mass behavior legitimizes decisions."
  }
];

const powerLaws = [
  "Never outshine the master. Superiority is threatening. Make them feel brilliant.",
  "Say less than necessary. Silence creates mystery. Let them fill the void.",
  "Control the options. Give them choices you designed. They'll feel autonomous.",
  "Use selective honesty. One truth makes lies believable. Disarm with candor.",
  "Play on emotion, not logic. Feelings override reason. Anger, fear, desire—exploit them all.",
  "Create dependency. Be the solution to problems you create. They'll need you.",
  "Keep people off balance. Unpredictability prevents counter-strategy. Chaos is control.",
  "Enter through the wound. Find their pain. Offer healing. Own their vulnerability."
];

const bodyLanguage = [
  {
    signal: "Crossed Arms",
    meaning: "Defensive barrier. Closed to influence. Need to break resistance first."
  },
  {
    signal: "Eye Contact Breaking Down-Left",
    meaning: "Accessing constructed images. Likely fabricating. Push harder."
  },
  {
    signal: "Mirroring Your Movements",
    meaning: "Unconscious rapport. They're receptive. Time to escalate."
  },
  {
    signal: "Touching Face/Neck",
    meaning: "Self-soothing behavior. Stress indicator. They're vulnerable."
  },
  {
    signal: "Leaning In",
    meaning: "Interest, engagement. Your message is landing. Continue."
  },
  {
    signal: "Foot Pointing Away",
    meaning: "Subconscious exit desire. Body wants to leave. Losing them."
  }
];

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState('observer');
  const [userInput, setUserInput] = useState('');
  const [analysis, setAnalysis] = useState('');

  const analyzeInput = () => {
    if (!userInput.trim()) return;

    let response = '';

    switch(selectedAgent) {
      case 'observer':
        response = `◆ OBSERVATION ANALYSIS ◆\n\nYour words reveal more than you intend.\n\nSubtext detected: ${userInput.toLowerCase().includes('friend') ? 'Social dependency' : userInput.toLowerCase().includes('work') ? 'Power struggle detected' : 'Emotional vulnerability'}\n\nHidden motive: ${userInput.includes('?') ? 'Seeking validation. Uncertainty is weakness.' : 'Asserting control. Testing boundaries.'}\n\nRecommendation: ${userInput.toLowerCase().includes('help') ? 'Dependency creates leverage. Be the solution.' : 'Observe longer. Premature action exposes intention.'}\n\n⚡ Power lies in patience.`;
        break;
      case 'manipulator':
        response = `◆ MANIPULATION PROTOCOL ◆\n\nTarget vulnerability identified.\n\nApproach: ${userInput.toLowerCase().includes('relationship') ? 'Intermittent reinforcement. Withhold predictability.' : 'Social proof. Show them others already complied.'}\n\nExecution:\n1. ${userInput.includes('trust') ? 'Mirror their values. Become their reflection.' : 'Create artificial scarcity. Limited time/access.'}\n2. ${userInput.includes('decision') ? 'Present 3 options. All lead to your goal.' : 'Use emotional triggers. Logic is secondary.'}\n3. Withdraw slightly. Let them pursue.\n\n⚡ Control is invisible.`;
        break;
      case 'strategist':
        response = `◆ STRATEGIC ASSESSMENT ◆\n\n3-move analysis:\n\nCurrent position: ${userInput.toLowerCase().includes('conflict') ? 'Opposition detected. Never attack directly.' : 'Neutral ground. Opportunity for positioning.'}\n\nOptimal path:\n→ ${userInput.includes('win') ? 'Reframe victory. Change what winning means.' : 'Indirect approach. Let them think it was their idea.'}\n→ ${userInput.includes('convince') ? 'Don\'t convince. Create circumstances where they convince themselves.' : 'Build dependency slowly. Sudden moves create resistance.'}\n→ ${userInput.includes('power') ? 'True power is invisible. Obvious force is weakness.' : 'Exit strategy prepared. Always control the ending.'}\n\n⚡ Chess, not checkers.`;
        break;
      case 'defender':
        response = `◆ DEFENSE ANALYSIS ◆\n\nThreat assessment:\n\nPotential manipulation detected: ${userInput.toLowerCase().includes('urgent') ? 'SCARCITY TACTIC - Artificial urgency creates pressure' : userInput.toLowerCase().includes('everyone') ? 'SOCIAL PROOF - Bandwagon pressure' : 'EMOTIONAL MANIPULATION - Logic bypassed'}\n\nCountermeasure:\n✓ ${userInput.includes('?') ? 'Don\'t answer immediately. Urgency is their weapon.' : 'Request evidence. Vague claims are manipulation flags.'}\n✓ ${userInput.includes('trust') ? 'True trust isn\'t demanded. It\'s earned over time.' : 'Check independently. Never rely on single source.'}\n✓ Establish boundaries. Clear limits prevent exploitation.\n\n⚡ Awareness is armor.`;
        break;
    }

    setAnalysis(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
          >
            DARK PSYCHOLOGY
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            <p className="animate-fade-in">Most people reveal their weakness before they speak.</p>
            <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>Power listens. Manipulation waits.</p>
            <p className="animate-fade-in" style={{ animationDelay: '1s' }}>The one who controls emotions… controls the room.</p>
          </motion.div>
        </div>

        {/* Agent Selection */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">SELECT YOUR AGENT</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { id: 'observer', name: 'OBSERVER', desc: 'Silent. Calculating. Sees all.' },
              { id: 'manipulator', name: 'MANIPULATOR', desc: 'Architect of influence.' },
              { id: 'strategist', name: 'STRATEGIST', desc: 'Three moves ahead.' },
              { id: 'defender', name: 'DEFENDER', desc: 'Breaks the illusion.' }
            ].map((agent) => (
              <motion.button
                key={agent.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAgent(agent.id)}
                className={`p-6 rounded-lg border-2 transition-all card-hover ${
                  selectedAgent === agent.id
                    ? 'border-white bg-white/10 shadow-glow'
                    : 'border-gray-700 bg-dark-700/50'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-400">{agent.desc}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Analysis */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 bg-dark-800/50 p-8 rounded-lg border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6">ANALYZE SITUATION</h2>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Describe a situation, relationship dynamic, or manipulation scenario..."
            className="w-full h-32 bg-dark-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors mb-4"
          />
          <button
            onClick={analyzeInput}
            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ANALYZE
          </button>

          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-dark-900 border border-gray-700 rounded-lg p-6"
            >
              <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300 leading-relaxed">
                {analysis}
              </pre>
            </motion.div>
          )}
        </motion.div>

        {/* Manipulation Tactics */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">MANIPULATION TACTICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manipulationTactics.map((tactic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
                className="bg-dark-800/50 p-6 rounded-lg border border-gray-700 card-hover"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{tactic.title}</h3>
                <p className="text-gray-400 text-sm mb-3 italic">{tactic.description}</p>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">ANALYSIS:</p>
                  <p className="text-gray-300 text-sm">{tactic.analysis}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">DEFENSE:</p>
                  <p className="text-green-400 text-sm">{tactic.defense}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cognitive Biases */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">COGNITIVE BIASES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {biases.map((bias, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + idx * 0.1 }}
                className="bg-dark-800/50 p-6 rounded-lg border border-gray-700 card-hover"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{bias.name}</h3>
                <p className="text-red-400 text-sm mb-2">{bias.exploit}</p>
                <p className="text-gray-400 text-sm italic">{bias.example}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Power Laws */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">LAWS OF POWER</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {powerLaws.map((law, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1 + idx * 0.1 }}
                className="bg-dark-800/50 p-6 rounded-lg border-l-4 border-white card-hover"
              >
                <p className="text-gray-300">{law}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Body Language */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">BODY LANGUAGE SIGNALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyLanguage.map((signal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4 + idx * 0.1 }}
                className="bg-dark-800/50 p-6 rounded-lg border border-gray-700 card-hover"
              >
                <h3 className="text-lg font-bold mb-3 text-white">{signal.signal}</h3>
                <p className="text-gray-400 text-sm">{signal.meaning}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 1 }}
          className="text-center text-gray-500 text-sm"
        >
          <p className="mb-2">Knowledge is not intent.</p>
          <p className="mb-2">Understanding is defense.</p>
          <p>Awareness prevents manipulation.</p>
          <p className="mt-6 text-xs">Observer of humans, not participant.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
