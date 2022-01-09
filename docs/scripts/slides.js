// One method per module
function schoolSlides() {
  return ['00-school-aws-tiny/00-TITLE.md', '00-school-aws-tiny/speaker-cla.md','00-school-aws-tiny/planning.md'];
}

function introSlides() {
  return ['01_intro-aws-tiny/00-TITLE.md'];
}

function premiersPasSlides() {
  return ['02_premiers_pas-aws-tiny/00-TITLE.md'];
}

function langagesSlides() {
  return ['03_langages/00-TITLE.md'];
}

function configurationSlides() {
  return ['04_configuration/00-TITLE.md'];
}

function strategieTestsSlides() {
  return ['05_strategie_tests/00-TITLE.md'];
}

function travailCoopSlides() {
  return ['06_travail_coop/00-TITLE.md'];
}

function productionSlides() {
  return ['07_production/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(),
    ...introSlides(),
    ...premiersPasSlides(),
    ...langagesSlides(),
    ...configurationSlides(),
    ...strategieTestsSlides(),
    ...travailCoopSlides(),
    ...productionSlides()
  ].map(slidePath => {
    return {path: slidePath};
  });
}

export function usedSlides() {
  return formation();
}
