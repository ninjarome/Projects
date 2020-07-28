import pygame
import time
import random

display_width = 500
display_height = 600

black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

class button():
    def __init__(self, color, outline, x,y,width,height, count):
        self.color = color
        self.outline = outline
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.count = count
        self.outline = outline

    def draw(self,win):
        #Call this method to draw the button on the screen
        if self.outline:
            pygame.draw.rect(win, self.outline, (self.x,self.y,self.width,self.height),0)
            pygame.draw.rect(win, self.color, (self.x+3,self.y+3,self.width-7,self.height-7),0)

        else:
            pygame.draw.rect(win, self.color, (self.x,self.y,self.width,self.height),0)
        

    def isOver(self, pos):
        #Pos is the mouse position or a tuple of (x,y) coordinates
        if pos[0] > self.x and pos[0] < self.x + self.width:
            if pos[1] > self.y and pos[1] < self.y + self.height:
                return True
            
        return False

def placeMines():
    mineList = []
    mines = False
    for i in range (0, 50):
        m = random.randrange(0, 15)
        if m < 2:
            mineList.append(1)
        else:
            mineList.append(0)
    for i in mineList:
        if i == 1:
            mines = True
    while not mines:
        mineList = placeMines
    return mineList

pygame.init()
gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Sweeper of Bombs')
clock = pygame.time.Clock()

def game_loop():
    gameExit = False
    butt = button(green, blue, 0, 100, 50, 50, 0)
    mines = placeMines()
    while not gameExit:
        gameDisplay.fill(black)
        pygame.draw.rect(gameDisplay, white, [0 , 100 , display_width,  display_height])

        butt.draw(gameDisplay)
        
        pygame.display.update()
        clock.tick(120)
        
        pos = pygame.mouse.get_pos()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

            if event.type == pygame.MOUSEBUTTONDOWN:
                if butt.isOver(pos):
                    print(len(mines))

            if event.type == pygame.MOUSEMOTION:
                if butt.isOver(pos):
                    butt.color = blue
                else:
                    butt.color = green



game_loop()
pygame.quit()
quit()

                
