import { motion } from 'framer-motion';
import styles from '@/styles/pages/Basics.module.scss';


export default function SignUp()  {
  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>
        Sign-up page
      </motion.div>
    </motion.div>
  )
};

