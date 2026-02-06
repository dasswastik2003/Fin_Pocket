
import FeaturesBanner from '@/components/featureSections/FeaturesBanner'
import FeaturesGrid from '@/components/featureSections/FeaturesGrid'
import HowItWorks from '@/components/featureSections/HowItWorks'
import Services from '@/components/featureSections/Services'
import React from 'react'

export default function Features() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
        <div className="grid"></div>
        
        {/* Features Banner */}
        <FeaturesBanner/>

        {/* Features Grid Section */}
        <FeaturesGrid/>

        {/* How It Works Section */}
        <HowItWorks/>

        {/* Services Section */}
        <Services/>

    </main>
  )
}
