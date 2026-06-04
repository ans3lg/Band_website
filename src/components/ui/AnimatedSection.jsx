import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './AnimatedSection.module.css';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'section',
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  const classes = [
    styles.section,
    styles[`section--${direction}`],
    isVisible && styles['section--visible'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
