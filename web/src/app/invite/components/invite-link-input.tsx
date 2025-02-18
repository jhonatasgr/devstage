'use client'

import { Button } from '@/components/ui/button'
import { Copy, ILink } from '@/components/ui/icons'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'

interface InviteLinkInputProps {
	link: string
}

export function InviteLinkInput({ link }: InviteLinkInputProps) {
	const copyLink = () => {
		navigator.clipboard.writeText(link)
	}

	return (
		<InputRoot>
			<InputIcon>
				<ILink className="size-5" />
			</InputIcon>
			<InputField type="text" readOnly defaultValue={link} />
			<InputIcon side="right">
				<Button size="icon" onClick={copyLink}>
					<Copy />
				</Button>
			</InputIcon>
		</InputRoot>
	)
}
