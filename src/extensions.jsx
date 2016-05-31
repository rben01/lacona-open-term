/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command, File } from 'lacona-phrases'
import { callSystem } from 'lacona-api'

export const OpenTerminal = {
  extends: [Command],

  execute (result) {
    console.log('opening term at' + result)

		script = 'if [[ -d "${result}" ]]; then open -a Terminal "${result}" elif [[ -f "${result}" ]]; then open -a Terminal "$(dirname "${result}")" else osascript -e \'display notification "Could not run Lacona command"\' fi '
    callSystem({command: script, args: []}, function() {})
  },

  describe () {
    return (
				<sequence>
					<choice>
						<literal text='open terminal ' />
						<literal text='terminal ' />
					</choice>
					<literal text='window ' />
					<literal text='at ' optional preferred />
					<File />
				</sequence>
    )
  }
}

export default [OpenTerminal]
