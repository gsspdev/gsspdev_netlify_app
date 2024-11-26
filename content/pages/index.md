---
type: PageLayout
title: Home
colors: colors-d
sections:
  - elementId: ''
    colors: colors-d
    backgroundSize: full
    title: 'I''m gssp. I''m an artist, engineer, and founder'
    subtitle: I needlessly over-engineer creative pursuits.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
        fontStyle: italic
        fontWeight: 400
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
    text: >
      I'm currently best known for being one of the founders of e/acc, the
      techno-optimist movement that has captured Silicon Valley. You can read a
      little about this here:
      [https://www.newyorker.com/magazine/2024/03/18/among-the-ai-doomsayers.](https://www.newyorker.com/magazine/2024/03/18/among-the-ai-doomsayers)


      My background is in music, film, and technology. I've worked production
      for studios such as Fox, NBC, Universal, and Apple Studios. I have a
      decade of experience as an electronic music production and professional DJ
      under an alias. I've written software as a professional over the last few
      years (Rust/Python) and as a hobbyist for over a decade (C++, C, Swift,
      Objective-C, others).


      I'm currently improving audio pre-processing for machine learning. I
      believe the results of this research will improve audio classification
      algorithms by an order of magnitude. I'm seeking venture capitalist
      partners to help build this at scale also. In other words:


      IF YOU ARE A VENTURE CAPITALIST LOOKING FOR A BILLION DOLLAR MOONSHOT IDEA
      LET'S TALK.


      My contact info is at the bottom of the page. I'm highly active on twitter
      too: @gssp\_acc.
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: ...and works I've abandoned
    title: Things I've Built
  - type: FeaturedPostsSection
    elementId: ''
    colors: colors-f
    variant: variant-d
    subtitle: Featured Posts
    showFeaturedImage: false
    actions:
      - type: Link
        label: See all posts
        url: /blog
    posts:
      - content/pages/blog/post-six.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: Got an interesting project?
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
