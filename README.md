# NextJS Template by @woodi97

## How to use

### BASIC

```bash
1. git clone repository_name
2. npm install -g yarn
3. yarn install
4. yarn dev or build
```

### ADVANCED

```bash
1. cp .env.example .env
```

## Before Making Modal Component

```md
1. define type of modal at src/core/interface/modal-type.ts
2. Add type of modal as a key at src/containers/Modal/ModalContainer.tsx
3. Write Modal Component at src/components/modal
4. Add OpenModalFunction at src/context/ModalContext.tsx
```

## Before write Code

```bash
1. vscode 설치
2. install prettier plugin at vscode market
3. install eslint plugin at vscode market
4. If you want to comment on code, please use(for example)
/**
 * @param {boolean} bgFilter - If true, the image will be displayed with a background filter
 */
```

## Tip

1. https://picsum.photos/500/300?random=${index} -> random image url
