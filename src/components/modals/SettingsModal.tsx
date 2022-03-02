import { SunIcon, ViewGridIcon } from '@heroicons/react/outline'
import { Settings } from '../../lib/localStorage'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  settings: Settings
  handleClose: () => void
  handleSettingChange: (settings: Partial<Settings>) => void
}

export const SettingsModal = ({
  isOpen,
  settings,
  handleClose,
  handleSettingChange,
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col justify-center">
        <button
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="toggle theme"
          onClick={() => {
            handleSettingChange({
              theme: settings.theme === 'dark' ? 'light' : 'dark',
            })
            try {
              ;(window as any).goatcounter.count({
                path: function (p: string) {
                  return 'click.theme-change' + p
                },
                title: 'click.theme-change',
                event: true,
              })
            } catch (e) {}
          }}
        >
          <SunIcon className="h-6 w-6 cursor-pointer dark:stroke-white inline mr-2" />
          <p className="text-sm text-gray-500 dark:text-gray-300 inline">
            Toggle dark mode
          </p>
        </button>

        <button
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="change keyboard layout"
          onClick={() => {
            handleSettingChange({
              keyboardLayout:
                settings.keyboardLayout === 'ten-per-line'
                  ? 'traditional'
                  : 'ten-per-line',
            })
            try {
              ;(window as any).goatcounter.count({
                path: function (p: string) {
                  return 'click.keyboard-layout' + p
                },
                title: 'click.keyboard-layout',
                event: true,
              })
            } catch (e) {}
          }}
        >
          <ViewGridIcon className="h-6 w-6 cursor-pointer dark:stroke-white inline mr-2" />
          <p className="text-sm text-gray-500 dark:text-gray-300 inline">
            Change keyboard layout
          </p>
        </button>
      </div>
    </BaseModal>
  )
}
