import * as React from 'react';
import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/animations/svgs';

const Four = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg width='390' height='160' viewBox='0 0 390 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g
          id='frame_3'
          data-name='frame_3'
        >
          <motion.rect {...mainPathVariant} width='390' height='160' transform='translate(1)' fill='white' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M1.09419 154L390.742 11.4899' stroke='#4E4E4E' strokeDasharray='4 4' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M94.9476 119.597L197.209 82.5112L295.94 46.5762' stroke='#252323' strokeWidth='2.5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M87.0915 120.853C87.0915 118.644 88.8824 116.853 91.0915 116.853C93.3006 116.853 95.0915 118.644 95.0915 120.853C95.0915 123.062 93.3006 124.853 91.0915 124.853C88.8824 124.853 87.0915 123.062 87.0915 120.853Z' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.circle cx='299.094' cy='45' r='4' transform='rotate(-180 299.094 45)' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M154.094 124.5C154.094 124.776 154.318 125 154.594 125C154.87 125 155.094 124.776 155.094 124.5H154.094ZM149.252 101.526C148.99 101.438 148.707 101.58 148.62 101.842L147.197 106.111C147.109 106.373 147.251 106.656 147.513 106.743C147.775 106.831 148.058 106.689 148.145 106.427L149.41 102.632L153.205 103.897C153.467 103.985 153.75 103.843 153.838 103.581C153.925 103.319 153.783 103.036 153.521 102.949L149.252 101.526ZM155.094 124.5C155.094 117.721 154.467 113.541 153.446 110.288C152.43 107.05 151.022 104.737 149.541 101.776L148.647 102.224C150.167 105.263 151.508 107.45 152.492 110.587C153.472 113.709 154.094 117.779 154.094 124.5H155.094Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M114.594 124H194.594' stroke='#B8B8B8' strokeWidth='2' strokeLinecap='round' strokeDasharray='5 5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M160.161 116.448C160.161 115.307 160.363 114.104 160.767 112.84C161.17 111.576 161.719 110.485 162.413 109.567C163.107 108.65 163.826 108.124 164.572 107.99C164.582 107.99 164.623 107.99 164.696 107.99C164.768 107.99 164.83 107.984 164.882 107.973C165.441 108.018 165.876 108.292 166.187 108.795C166.591 109.467 166.793 110.367 166.793 111.497C166.793 112.784 166.56 114.093 166.094 115.425C165.628 116.756 165.032 117.847 164.308 118.697C163.583 119.548 162.889 119.973 162.226 119.973H162.118C161.745 119.973 161.424 119.861 161.155 119.637C160.886 119.414 160.684 119.117 160.549 118.748C160.414 118.379 160.316 118.004 160.254 117.623C160.192 117.243 160.161 116.851 160.161 116.448ZM165.566 110.306C165.566 109.165 165.291 108.594 164.742 108.594C164.37 108.594 164.007 108.846 163.655 109.349C163.303 109.853 163.013 110.423 162.786 111.061C162.558 111.699 162.382 112.258 162.258 112.739C162.133 113.221 162.066 113.5 162.056 113.579C162.563 113.59 163.065 113.595 163.562 113.595L165.069 113.579C165.079 113.567 165.12 113.383 165.193 113.025C165.265 112.667 165.348 112.219 165.441 111.682C165.535 111.145 165.576 110.686 165.566 110.306ZM161.372 117.59C161.372 118.776 161.647 119.369 162.195 119.369C162.351 119.369 162.516 119.313 162.692 119.201C162.868 119.089 163.081 118.876 163.329 118.563C163.578 118.25 163.826 117.763 164.075 117.103C164.323 116.443 164.572 115.626 164.82 114.653L164.898 114.367H161.869C161.869 114.401 161.823 114.614 161.729 115.005C161.636 115.397 161.553 115.833 161.481 116.314C161.408 116.795 161.372 117.221 161.372 117.59Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
        </g>
      </svg>
    </motion.div>
  )
};

export default Four;
