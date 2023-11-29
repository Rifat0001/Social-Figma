// AudioPlayer.jsx

import { useCallback, useState } from 'react';
import mpp from '../../../../assets/Mp/audio.mp3';
import TimelinePlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js';
import WaveSurferPlayer from './WaveSurferPlayer';
import './Wave.css'; // Import your CSS file
import WaveSurfer from 'wavesurfer.js';

function AudioPlayer({ className }) {
    const urls = [mpp];
    const [audioUrl, setAudioUrl] = useState(urls[0]);
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, '#00E7FC');
    gradient.addColorStop(0.7, ' #EC46E5');

    const bottomTimline = TimelinePlugin.create({
        height: 10,
        timeInterval: 0.1,
        primaryLabelInterval: 1,
        style: {},
    });

    return (
        <>
            <WaveSurferPlayer
                className='wave-surf w-[600px]'
                height={90}// Default width for laptops
                waveColor={gradient}
                width={500}
                barWidth={2}
                responsive={'30'}
                barGap={8}
                barRadius={2}
                progressColor="#EC46E5"
                url={audioUrl}
                plugins={bottomTimline}
            />
        </>
    );
}

export default AudioPlayer;
