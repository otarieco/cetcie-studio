enum SEO_STATUS {
  VALID = 'valid',
  INVALID = 'invalid',
}

const SEO_STATUS_EMOJIS = {
  valid: '',
  invalid: ' | SEO: 🚩',
};

const seoStatus = (seo: any) => {
  if (!seo?.title || seo?.title?.length < 15) {
    return SEO_STATUS.INVALID;
  }

  if (!seo?.description || seo?.description?.length < 70) {
    return SEO_STATUS.INVALID;
  }

  return SEO_STATUS.VALID;
};

export const seoPreview = (seo?: any) => {
  if (!seo) {
    return SEO_STATUS_EMOJIS.invalid;
  }
  return `${seo.noIndex ? '🕶️' : ''} ${SEO_STATUS_EMOJIS[seoStatus(seo)]}`;
};