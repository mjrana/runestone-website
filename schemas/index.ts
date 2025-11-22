import type {SchemaTypeDefinition} from 'sanity'
// objects
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import richText from './objects/richText'
import hero from './objects/hero'
import section from './objects/section'
import metrics from './objects/metrics'
import ctaSection from './objects/cta'
import logoCloud from './objects/logoCloud'
import faqSection from './objects/faq'

// documents
import siteSettings from './documents/siteSettings'
import navigation from './documents/navigation'
import homePage from './documents/homePage'
import page from './documents/page'
import service from './documents/service'
import caseStudy from './documents/caseStudy'
import blogPost from './documents/blogPost'
import event from './documents/event'
import teamMember from './documents/teamMember'
import legalPage from './documents/legalPage'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    localeString, localeText, richText, hero, section, metrics,
    ctaSection, logoCloud, faqSection,
    siteSettings, navigation, homePage, page, service,
    caseStudy, blogPost, event, teamMember, legalPage
  ],
}
