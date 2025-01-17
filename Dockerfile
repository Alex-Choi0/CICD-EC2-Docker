FROM node:20.10.0

# 경로 설정하기
WORKDIR /app
# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY package.json .
# 명령어 실행 (의존성 설치)
RUN npm install
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 디렉토리에 복사한다.
COPY . .

# 3000번 포트 노출. 실제로는 표시만 해준다.
EXPOSE 3000

# npm start 스크립트 실행
CMD ["npm", "start"]
