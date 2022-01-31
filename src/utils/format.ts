import moment from 'moment'

export const formatPhoneNumber = (number: string): string => {
  const trimmed = number.replace(/\D/g, '')
  if (trimmed.length >= 10) {
    return trimmed.replace(/(\d{2})(\d{4})(\d{4,})/, '$1 $2 $3')
  } else if (trimmed.length >= 4) {
    return trimmed.replace(/(\d{3})(\d+)/, '$1 $2')
  } else {
    return trimmed
  }
}

export const formatFullNumber = (countryCode?: string, number?: string): string => {
  let result = ''
  if (countryCode) result += `+${countryCode} `
  if (number) result += formatPhoneNumber(number)
  return result
}

export const capitalizeFirstLetter = (s: string): string => {
  if (!s || typeof s !== 'string') {
    return ''
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const formatPriceNumber = (number: number): string => {
  let price = number >= 0 ? '₩ ' : '- ₩ '
  price += Math.abs(number).toLocaleString()
  return price
}

export const formatChatDate = (date: string): string => {
  const now = moment()
  const target = moment(date)
  if (target.isSame(now, 'day')) {
    return target.format('h:mm A')
  } else if (target.isSame(now, 'year')) {
    return target.format('MM/DD h:mm A')
  } else {
    return target.format('MM/DD/YYYY h:mm A')
  }
}
