/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command, File } from 'lacona-phrases'
import { runApplescript, callSystem } from 'lacona-api'

export const OpenTerminal = {
  extends: [Command],

  execute (result) {
		var fp = result.filepath
		var cmd = (
			'if [[ -d "' + fp + '" ]]; then ' +
				'open -a Terminal "' + fp + '"; ' +
			'elif [[ -f "' + fp + '" ]]; then ' +
				'open -a Terminal "$(dirname "' + fp + '")"; ' + 
			'else ' + 
				'osascript -e \'display notification "Failed to run Lacona command"\'; ' +
			'fi '
		)

		callSystem({command: "/bin/bash", args: ['-c', cmd]}, function(){})
  },

  describe () {
    return (
				<sequence>
					<literal text='new terminal window at ' />
					<File id='filepath' />
				</sequence>
    )
  }
}

export default [OpenTerminal]
