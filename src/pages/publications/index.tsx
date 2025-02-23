import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import icons from '@/components/icons/Icons';
import { IPublication } from '@/lib/types';
import { motion } from 'framer-motion';
import {
  headerVariant,
  boxVariant,
  fadeInUp
} from '@/lib/animations/pages';
import styles from '@/styles/pages/Publications.module.scss';


const Publications = ({ publications }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [bpr, setBpr] = React.useState(publications);

  return (
    <motion.div className={styles.container} layout>
      <motion.div className={styles.grid}>

        {/* Card header */}
        <motion.div className={styles.header}>
          <motion.h1
            className={styles.title1}
            variants={headerVariant}
            initial='initial'
            animate='animate'
          >
            TN Supreme Court
          </motion.h1>
          <motion.h2
            className={styles.title2}
            variants={headerVariant}
            initial='initial'
            animate='animate'
          >
            Board of Professional Responsibility
          </motion.h2>
          <motion.h3
            className={styles.title3}
            variants={headerVariant}
            initial='initial'
            animate='animate'
          >
            Recent disciplinary action publications
          </motion.h3>
        </motion.div>

        <motion.div
          className={styles.box}
          variants={boxVariant}
          initial='initial'
          animate='animate'
        >
          {bpr.map((publication: IPublication) => (
            <motion.div
              key={publication.id}
              className={styles.card}
              variants={fadeInUp}
              animate='animate'
              initial='initial'
            >

              {/* Card header */}
              <motion.div id={styles.header} className='uk-card-header'>
                <motion.div className={styles['card-grid']}>
                  <motion.div className={styles.col1}>
                    <Image
                      className='uk-border-circle'
                      width={60}
                      height={60}
                      src={icons[0]}
                    />
                  </motion.div>
                  <motion.div className={styles.col2}>
                    <h3 id={styles.title} className='uk-card-title uk-margin-remove-bottom uk-text-light'>
                      {publication.attorney}
                    </h3>
                    <p className='uk-text-meta uk-margin-remove-top'>
                      <time>
                        {publication.date}
                      </time>
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Card body */}
              <motion.div id={styles.body} className='uk-card-body uk-margin-remove'>
                <p className={styles.paragraph}>
                  {publication.title}
                </p>
              </motion.div>

              {/* Card footer */}
              <motion.div className='uk-card-footer'>
                <Link href={publication.link} passHref>
                  <a
                    className={styles.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View publication
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${process.env.NEXT_PUBLIC_URL}`;
  const res = await fetch(endpoint);
  const publications: IPublication[] = await res.json();

  return {
    props: { publications }
  }
};

export default Publications;
