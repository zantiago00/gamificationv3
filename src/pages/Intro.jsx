import { Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TrendBubble from '../components/TrendBubble'
import Button from '../components/ui/Button'

export default function Intro() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center md:justify-center text-center p-4">
      <div className="flex flex-col gap-4">
        <TrendBubble icon={Sparkles} label="How can we leverage AI?" style={{ animationDelay: '0.1s' }} />
        <TrendBubble icon={Sparkles} label="LLMs are the future!" badge="Cube" badgeColor="bg-red-500" style={{ animationDelay: '0.2s' }} />
        <TrendBubble icon={Sparkles} label="Just ask ChatGPT" badge="SCROLLR" badgeColor="bg-yellow-500" style={{ animationDelay: '0.3s' }} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mt-6">Introducción al Storytelling Digital</h1>
      <div className="max-w-[600px] leading-relaxed mt-4 space-y-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
      </div>
      <Button
        variant="default"
        className="mt-6"
        aria-label="Comenzar la primera misión"
        onClick={() => navigate('/level/1')}
      >
        ¡Empezar misión!
      </Button>
    </div>
  )
}
