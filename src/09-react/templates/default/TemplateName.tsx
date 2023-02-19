import styles from './TemplateName.module.scss';

interface TemplateNameProps { }

export const TemplateName = ({ }: TemplateNameProps) => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);
