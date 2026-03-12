/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedExperience from './components/FeaturedExperience';
import CharacterShowcase from './components/CharacterShowcase';
import GamesStore from './components/GamesStore';
import Accessories from './components/Accessories';
import GameZones from './components/GameZones';
import Events from './components/Events';
import VisitShowroom from './components/VisitShowroom';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ps-darker text-white font-sans selection:bg-ps-blue-light selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedExperience />
        <CharacterShowcase />
        <GamesStore />
        <Accessories />
        <GameZones />
        <Events />
        <VisitShowroom />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
