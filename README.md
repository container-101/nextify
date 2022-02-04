# NextJS Template by woodi97.github.io

## 사용법

```bash
1. git clone repository_name
2. npm install -g yarn
3. yarn install
4. yarn prepare(husky hook을 사용하기 위함)
5. yarn dev
```

## Template 특이사항

```test
1. 새로운 모달을 만들고 싶을시 src/components/modal 안에 모달 컴포넌트를 작성한다
2. src/core/interface/modal-type.ts interface안에 자신이 정의한 모달의 이름을 정의한다
3. src/containers/Modal/ModalContainer안에 SelectRenderingModal 함수에 자신이 정의한 모달의 이름을 키 값으로 넣을시 해당 컴포넌트를 반환하는 값을 넣는다(2번을 하면 자동으로 정의해달라는 에러가 뜹니다)
```

## 코드 작성전 유의사항

```bash
1. vscode 설치
2. vscode market에서 prettier 설치
3. vscode market에서 eslint 설치
4. git flow 사용중
5. git flow feature start "기능이름"
6. git flow feature finish "기능이름"
```

## 저장할때마다 코드 자동 prettieerc & eslintrc 적용하는 방법

```text
1. VS Code에서 settings.json파일을 들어간다(윈도우, 리눅스에서는 Ctrl + ,, 맥에서는 Cmd + , 를 누르고 오른쪽 위에 작은 문서 아이콘 누르면 settings.json 볼 수 있음)
2. 아래 내용을 붙여넣기
{
    // Set the default
    "editor.formatOnSave": true,
    // per-language
    "[javascript]": {
    "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true
    }
}
```
