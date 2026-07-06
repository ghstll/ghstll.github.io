import { execSync } from 'node:child_process'


execSync('npx likec4 gen model -o ./test/likec4-model.ts', {
    stdio: 'inherit'
})
