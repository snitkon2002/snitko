import json

class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        a = 0;
        for i in range(len(number_string)):
            b = int(number_string[i]);
            a += b;
            print(a);

 def get_leader_string(self, steps: int) -> str:
        result = ""
        for i in range (steps + 1):
            str = ""
            for j in range (steps - i):
                str += ' '
            for j in range (i):
                str += '#'
            result += str + '\n'
        return result


def to_json(self, func):
 def wrapped(*args, **kwargs):
return json.dumps(func(*args, **kwargs));
                 wrapped

if __name__ == '__main__':
    solution = Solution()
    solution.sum_number_in_string('12345')
    solution.sum_number_in_string('160438521039')
    print(solution.get_leader_string(3))
    print(solution.get_leader_string(5))

@solution.to_json
    def get_data():
        return {
        'data': 42
    }

    print(get_data())