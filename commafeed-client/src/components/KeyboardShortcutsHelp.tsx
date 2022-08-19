import { Trans } from "@lingui/macro"
import { Kbd, Table } from "@mantine/core"

export function KeyboardShortcutsHelp() {
    return (
        <Table striped highlightOnHover>
            <tbody>
                <tr>
                    <td>
                        <Trans>Refresh</Trans>
                    </td>
                    <td>
                        <Kbd>R</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Open next entry</Trans>
                    </td>
                    <td>
                        <Kbd>J</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Open previous entry</Trans>
                    </td>
                    <td>
                        <Kbd>K</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Move the page down</Trans>
                    </td>
                    <td>
                        <Kbd>
                            <Trans>Space</Trans>
                        </Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Move the page up</Trans>
                    </td>
                    <td>
                        <Kbd>
                            <Trans>Shift</Trans>
                        </Kbd>
                        <span> + </span>
                        <Kbd>
                            <Trans>Space</Trans>
                        </Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Open/close current entry</Trans>
                    </td>
                    <td>
                        <Kbd>O</Kbd>,<span> </span>
                        <Kbd>
                            <Trans>Enter</Trans>
                        </Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Open current entry in a new tab</Trans>
                    </td>
                    <td>
                        <Kbd>V</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Open current entry in a new tab in the background</Trans>
                    </td>
                    <td>
                        <Kbd>B</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Toggle read status of current entry</Trans>
                    </td>
                    <td>
                        <Kbd>M</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Mark all entries as read</Trans>
                    </td>
                    <td>
                        <Kbd>
                            <Trans>Shift</Trans>
                        </Kbd>
                        <span> + </span>
                        <Kbd>A</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Go to the All view</Trans>
                    </td>
                    <td>
                        <Kbd>G</Kbd>
                        <span> </span>
                        <Kbd>A</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Navigate to a subscription by entering its name</Trans>
                    </td>
                    <td>
                        <Kbd>G</Kbd>
                        <span> </span>
                        <Kbd>U</Kbd>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Trans>Show keyboard shortcut help</Trans>
                    </td>
                    <td>
                        <Kbd>?</Kbd>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}