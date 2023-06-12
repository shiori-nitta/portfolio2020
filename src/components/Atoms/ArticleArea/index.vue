<template>
  <div class="article-area"><slot></slot></div>
</template>

<style lang="scss">
.article-area {
  margin: 20px 0;
  line-height: 2;
  h1 {
    padding: 10px 0;
    font-size: 2.4rem;
    line-height: 1.6;
    border-bottom: 2px dotted lighten($text-color, 60%);
    margin: 40px 0 20px;
    @include font-bold;
    @include media(md, max) {
      font-size: 2rem;
      margin: 32px 0 20px;
    }
  }
  h2 {
    font-size: 2rem;
    line-height: 1.6;
    padding-left: 16px;
    margin-top: 40px;
    border-left: 2px solid $text-color;
    margin: 40px 0 20px;
    @include font-bold;
    @include media(md, max) {
      font-size: 1.8rem;
      margin: 32px 0 20px;
    }
  }
  h3 {
    margin: 36px 0 20px;
    font-size: 2rem;
    line-height: 1.6;
    display: flex;
    @include font-bold;
    @include media(md, max) {
      font-size: 1.6rem;
    }
  }
  p,
  img {
    margin: 28px 0;
  }
  img {
    width: 100%;
  }
  a {
    padding: 0;
    font-size: 1.6rem;
    line-height: 1.6;
    color: $link-color;
    text-decoration: none;
    border: none;
    background: transparent;
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background: $link-color;
      transform: scaleX(0);
      transform-origin: bottom left;
      position: absolute;
      bottom: -4px;
      left: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
      }
    }
  }
  ul,
  ol {
    margin: 20px 0;
    padding-left: 24px;
    @include media(md, max) {
      padding: 10px 20px;
    }
    li {
      margin: 10px 0;
    }
  }
  blockquote {
    padding: 10px 30px;
    border: 1px solid lighten($text-color, 60%);
    border-radius: 4px;

    ul,
    ol {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  code {
    border-radius: 4px;
    background: lighten($text-color, 72%);
    color: $text-color;
  }
  pre {
    margin: 10px 0;
    padding: 12px 16px;
    background: $text-color;
    border-radius: 4px;
    overflow: scroll;
    @include media(md, max) {
      padding: 8px 12px;
    }
    code {
      color: $white-color;
      font-size: 1.4rem;
      background: transparent;
    }
  }
  em {
    @include font-bold;
  }
  table {
    width: 100%;
    margin: 30px 0;
    border-collapse: collapse;
    border: 1px solid $border-color;
    background: $white-color;
  }
  th,
  td {
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
    border-right: 1px solid $border-color;
  }
  th {
    background: lighten($text-color, 75%);
    color: $text-color;
    @include font-bold;
    line-height: 1.6;
  }
  .video {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
