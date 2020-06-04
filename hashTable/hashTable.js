// basic hash function

function basicHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    total += char.charCodeAt();
    total = total % arrayLen;
  }
  return total;
}

console.log(basicHash("hello", 10), 10);
console.log(basicHash("nice", 10), 10);
console.log(basicHash("pink", 10), 10);

/*

기존 스터디 구성원분들 참여율이 저조해 
기존방에는 공지드리고 단톡방을 새로 만들었는데요,

앞으로는 취준생에 한해 스터디원을 모집할 예정입니다.
다음주 중에 다시 한 번 모집글 올려보겠습니다.
그 때까지 노션, 깃허브에 스터디 활동을 활발히 기록한다면
열심히 해주실 분들이 와주시지 않을까... 생각합니다.

은지님은 notion 코테란에 2문제를 출제해주시고
일요일까지 2문제를 우선적으로 준비해주시면 됩니다.

이번 출제 문제는 2nd week로 라벨링 되었는데요,
혹시나 버거우시다면 체육복, 크레인 인형뽑기, 모의고사, 비밀지도, 문자열 순으로 풀어주세요.



*/
